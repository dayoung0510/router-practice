import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' },
];

const Thumbnail = ({ color }: any) => {
  return <div style={{ width: '10rem', height: '10rem', background: color }} />;
};

const Image = ({ color }: any) => {
  return <div style={{ width: '100%', height: '20rem', background: color }} />;
};

const Home = () => {
  return (
    <div>
      <Link to="/modal-gallery/gallery">갤러리에 방문하세요</Link>
      <ul>
        <li>
          <Link to="/modal-gallery/img/2">토마토</Link>
        </li>
        <li>
          <Link to="/modal-gallery/img/4">크림슨</Link>
        </li>
      </ul>
    </div>
  );
};

const Gallery = () => {
  const location = useLocation();

  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/modal-gallery/${i.id}`,
            state: { background: location },
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
};

const ImageView = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
};

const Modal = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params as { id: string };
  const image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  const back = () => {
    history.goBack();
  };

  return (
    <div
      // onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          닫기
        </button>
      </div>
    </div>
  );
};

type LocationState = {
  background: string;
};

const ModalSwitch = () => {
  const location = useLocation<LocationState>();
  const background = location.state && location.state.background;
  console.log(background, '!');
  console.log(location, '!!');

  return (
    <div>
      <Switch location={location}>
        <Route exact path="/modal-gallery/">
          <Home />
        </Route>
        <Route path="/modal-gallery/gallery">
          <Gallery />
        </Route>
        <Route path="/modal-gallery/img/:id">
          <ImageView />
        </Route>
      </Switch>
      {background && (
        <Route path="/modal-gallery/img/:id">
          <Modal />
        </Route>
      )}
    </div>
  );
};

const ModalGallery: React.FC = () => {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
};

export default ModalGallery;

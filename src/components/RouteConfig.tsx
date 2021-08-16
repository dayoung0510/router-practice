import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

type Props = {
  path: string;
  component: React.ElementType;
};

type RouteProps = {
  path: string;
  component: React.ElementType;
  routes: Props[];
};

// const RouteWithSubRoutes = (route: RouteProps) => {
//   return (
//     <Route
//       path={route.path}
//       render={(props) => <route.component {...props} routes={route.routes} />}
//     />
//   );
// };

const Sandwiches = () => {
  return <h2>샌드위치</h2>;
};

// const Tacos = () => {
//   return (
//     <div>
//       <h2>타코</h2>
//       <ul>
//         <li>
//           <Link to="/route-config/tacos/bus">버스</Link>
//         </li>
//         <li>
//           <Link to="/route-config/tacos/cart">카트</Link>
//         </li>
//       </ul>

//       <Switch>
//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </Switch>
//     </div>
//   );
// };

// const Bus = () => {
//   return <h3>버스</h3>;
// };

// const Cart = () => {
//   return <h3>카트</h3>;
// };

// const routes = [
//   {
//     path: '/sandwiches',
//     component: Sandwiches,
//   },
//   {
//     path: '/tacos',
//     component: Tacos,
//     routes: [
//       {
//         path: '/tacos/bus',
//         component: Bus,
//       },
//       {
//         path: '/tacos/cart',
//         component: Cart,
//       },
//     ],
//   },
// ];

const RouteConfig: React.FC = () => {
  return (
    <>
      실패ㅠ
      {/* <Router>
        <div>
          <ul>
            <li>
              <Link to="/tacos">Tacos</Link>
            </li>
            <li>
              <Link to="/sandwiches">Sandwiches</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router> */}
    </>
  );
};

export default RouteConfig;

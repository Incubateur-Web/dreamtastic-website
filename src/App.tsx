import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import { UserContextProvider } from "./contexts/UserContext";
import NotFoundPage from "./pages/error/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const DreamPage = lazy(() => import("./pages/DreamPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const SignInForm = lazy(() => import("./components/auth/SignInForm"));
const SignUpForm = lazy(() => import("./components/auth/SignUpForm"));

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dream/:id" component={DreamPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/profile/:id" component={ProfilePage} />
            <Route exact path="/profile/:id/edit">
              <ProfilePage editing />
            </Route>
            <Route exact path="/auth/signin">
              <AuthPage>
                <SignInForm />
              </AuthPage>
            </Route>
            <Route exact path="/auth/signup">
              <AuthPage>
                <SignUpForm />
              </AuthPage>
            </Route>
            <Route exact path="/error" component={ErrorPage} />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </UserContextProvider>
  );
}

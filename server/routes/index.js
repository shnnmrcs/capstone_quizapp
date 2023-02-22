import usersRouter from './users.route';
import authRouter from './auth.route';
import testsRouter from './tests.route';

export default class Routes {
  static initRoutes(app) {
    app.use('/api/users', usersRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/tests', testsRouter);
  }
}

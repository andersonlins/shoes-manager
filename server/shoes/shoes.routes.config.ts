import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class ShoesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ShoesRoutes');
    }

    configureRoutes(): express.Application {
        return this.app;
    }
}
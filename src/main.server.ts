import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: any) => {
    return bootstrapApplication(AppComponent, {
        providers: [
        ...config.providers,
        ],
    }, context);
}

export default bootstrap;

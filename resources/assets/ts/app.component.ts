import { Component } from '@angular/core';

@Component({
    selector : 'my-app',
    template : `<h1>Hello {{name}}</h1>
                <laravel></laravel>`
})

export class AppComponent{ name = "Angular2"}
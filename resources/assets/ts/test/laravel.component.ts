import { Component } from '@angular/core';

@Component({
    selector : 'laravel',
    template : `<h1>Hello {{name}}</h1>`
})

export class LaravelComponent{ name = "Laravel"}
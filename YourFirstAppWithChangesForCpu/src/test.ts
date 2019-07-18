// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import 'zone.js/dist/zone-testing';
import { getTestBed, async, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { AppComponent } from 'src/app/app.component';

declare const require: any;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ AppComponent ],
    schemas: [NO_ERRORS_SCHEMA]
  })
  .compileComponents();
}));
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';     //仪表盘组件
import { HeroSearchComponent }  from './hero-search.component';

//@NgModule装饰器用来为模块定义元数据
@NgModule({ // @NgModule 用来定义模块用的装饰器
    declarations: [
        AppComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroesComponent,
        HeroSearchComponent
    ], // 导入模块所依赖的组件、指令等,用于指定这个模块的视图类
    imports: [
        BrowserModule, //包含了commonModule和applicationModule模块,封装在浏览器平台运行时的一些工具库
        FormsModule,  // 表单相关的组件指令等，包含了[(ngModel)]
        HttpModule,   //http模块
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ], // 导入当前模块所需要的其他模块
    providers: [ HeroService ],
    bootstrap: [AppComponent], // 标记出引导组件
    //把这个AppComponent标记为引导 (bootstrap) 组件。当Angular引导应用时，它会在DOM中渲
    //染AppComponent，并把结果放进index.html的元素内部。
})

export class AppModule { }
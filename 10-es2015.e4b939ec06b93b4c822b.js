(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(t,n,i){"use strict";i.r(n),i.d(n,"HomePageModule",function(){return g});var e=i("ofXK"),o=i("TEn/"),s=i("3Pt+"),b=i("tyNb"),a=i("b1TM"),r=i("fXoL");const c=function(){return["/settings"]};let l=(()=>{class t{constructor(t){this.settingSvc=t,this.quantity=3,this.size=300,this.flour=0,this.water=0,this.yeast=0,this.salt=0,this.evoo=0,this.settings={}}ngOnInit(){console.log(this.constructor.name)}ionViewWillEnter(){this.settingsSub&&this.settingsSub.unsubscribe(),this.settingsSub=this.settingSvc.getSettings().subscribe(t=>{this.settings=t,this.calc()})}calc(){this.flour=Math.ceil(this.quantity*(this.size/((100+this.settings.hydration+this.settings.yeast+this.settings.salt+this.settings.oo)/100))),this.water=Math.ceil(this.flour*(this.settings.hydration/100)),this.yeast=+(this.flour*(this.settings.yeast/100)).toFixed(1),this.salt=+(this.flour*(this.settings.salt/100)).toFixed(1),this.evoo=+(this.flour*(this.settings.oo/100)).toFixed(1)}}return t.\u0275fac=function(n){return new(n||t)(r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-home"]],decls:51,vars:15,consts:[["color","secondary"],["slot","start"],["slot","end"],[3,"routerLink"],["slot","icon-only","name","options-outline"],[1,"ion-no-padding"],["color","primary"],["debounce","100","min","1","max","10","step","1","snaps","true","color","primary",3,"ngModel","ionChange","ngModelChange"],["debounce","100","min","100","step","25","snaps","true","max","1000","color","primary",3,"ngModel","ionChange","ngModelChange"]],template:function(t,n){1&t&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar",0),r.Kb(2,"ion-buttons",1),r.Ib(3,"ion-menu-button"),r.Jb(),r.Kb(4,"ion-title"),r.bc(5," Doughball "),r.Jb(),r.Kb(6,"ion-buttons",2),r.Kb(7,"ion-button",3),r.Ib(8,"ion-icon",4),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(9,"ion-content",5),r.Kb(10,"ion-card"),r.Kb(11,"ion-card-header",6),r.Kb(12,"ion-card-title"),r.bc(13,"Dough Settings"),r.Jb(),r.Jb(),r.Kb(14,"ion-card-content"),r.Kb(15,"ion-list"),r.Kb(16,"h2"),r.bc(17),r.Jb(),r.Kb(18,"ion-item"),r.Kb(19,"ion-range",7),r.Rb("ionChange",function(){return n.calc()})("ngModelChange",function(t){return n.quantity=t}),r.Kb(20,"ion-label",1),r.bc(21,"1"),r.Jb(),r.Kb(22,"ion-label",2),r.bc(23,"10"),r.Jb(),r.Jb(),r.Jb(),r.Kb(24,"h2"),r.bc(25),r.Kb(26,"small"),r.bc(27,"(300 is perfect Neapolitan)"),r.Jb(),r.Jb(),r.Kb(28,"ion-item"),r.Kb(29,"ion-range",8),r.Rb("ionChange",function(){return n.calc()})("ngModelChange",function(t){return n.size=t}),r.Kb(30,"ion-label",1),r.bc(31,"100"),r.Jb(),r.Kb(32,"ion-label",2),r.bc(33,"1000"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(34,"ion-card"),r.Kb(35,"ion-card-header",6),r.Kb(36,"ion-card-title"),r.bc(37,"Dough Recipe "),r.Kb(38,"small"),r.bc(39," (Bakers %)"),r.Jb(),r.Jb(),r.Jb(),r.Kb(40,"ion-card-content"),r.Kb(41,"ion-item"),r.bc(42),r.Jb(),r.Kb(43,"ion-item"),r.bc(44),r.Jb(),r.Kb(45,"ion-item"),r.bc(46),r.Jb(),r.Kb(47,"ion-item"),r.bc(48),r.Jb(),r.Kb(49,"ion-item"),r.bc(50),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&(r.xb(7),r.Vb("routerLink",r.Wb(14,c)),r.xb(10),r.cc(" Quantity: ",n.quantity," "),r.xb(2),r.Vb("ngModel",n.quantity),r.xb(6),r.cc(" Size: ",n.size," grams "),r.xb(4),r.Vb("ngModel",n.size),r.xb(13),r.cc(" Flour: ",n.flour," grams (100%) "),r.xb(2),r.dc(" Water: ",n.water," grams (",n.settings.hydration,"%) "),r.xb(2),r.dc(" Yeast: ",n.yeast," grams (",n.settings.yeast,"%) "),r.xb(2),r.dc(" Salt: ",n.salt," grams (",n.settings.salt,"%) "),r.xb(2),r.dc(" Olive Oil: ",n.evoo," grams (",n.settings.oo,"%) "))},directives:[o.k,o.x,o.e,o.q,o.w,o.d,o.C,b.h,o.l,o.j,o.f,o.h,o.i,o.g,o.o,o.m,o.s,o.D,s.d,s.e,o.n],styles:["ion-card-title[_ngcontent-%COMP%]{font-size:1.2rem}ion-card-header[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}ion-range[_ngcontent-%COMP%]{padding-left:0;padding-right:0}"]}),t})(),g=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(n){return new(n||t)},imports:[[e.b,s.a,o.y,b.j.forChild([{path:"",component:l}])]]}),t})()}}]);
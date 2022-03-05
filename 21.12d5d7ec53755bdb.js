"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[21],{6021:(U,g,s)=>{s.r(g),s.d(g,{ProductModule:()=>q});var i=s(6019),l=s(5702),_=s(1382),t=s(3556);let m=(()=>{class n{constructor(e){this.router=e}canActivate(e,o){const c=Number(e.paramMap.get("id"));return!isNaN(c)||(alert("Not a valid product ID "),this.router.navigate(["/products"]),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(l.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=s(9445);function f(n,r){if(1&n&&(t.TgZ(0,"div",4),t.TgZ(1,"h1"),t._uU(2),t.qZA(),t._UZ(3,"img",5),t.qZA()),2&n){const e=r.ngIf;t.xp6(2),t.Oqu(e.name),t.xp6(1),t.MGl("src","../../../assets/",e.name,".jpg",t.LSH)}}function h(n,r){1&n&&(t.TgZ(0,"h4"),t._uU(1,"No product found"),t.qZA())}let Z=(()=>{class n{constructor(e,o,c){this.route=e,this.productService=o,this.router=c}ngOnInit(){this.route.paramMap.subscribe(e=>{const o=Number(this.route.snapshot.paramMap.get("id"));console.log(e.get("id")),isNaN(o)||(this.product$=this.productService.getProductsById(o))})}goback(){this.router.navigate(["/products"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(p.M),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-detail"]],decls:9,vars:4,consts:[[1,"btn","btn-info","mb-5",3,"click"],["class","mt-5 mb-5",4,"ngIf","ngIfElse"],["class","mt-5 mb-5"],["noProduct",""],[1,"mt-5","mb-5"],["alt","",3,"src"]],template:function(e,o){if(1&e&&(t._UZ(0,"br"),t.TgZ(1,"button",0),t.NdJ("click",function(){return o.goback()}),t._uU(2,"go back"),t.qZA(),t._UZ(3,"br"),t.YNc(4,f,4,2,"div",1),t.ALo(5,"async"),t._UZ(6,"br"),t.YNc(7,h,2,0,"ng-template",2,3,t.W1O)),2&e){const c=t.MAs(8);t.xp6(4),t.Q6J("ngIf",t.lcZ(5,2,o.product$))("ngIfElse",c)}},directives:[i.O5],pipes:[i.Ov],styles:[""]}),n})();var u=(()=>{return(n=u||(u={})).Mobile="mobile",n.Tv="TV",n.WashingMachine="Washing Machine",n.Watch="Watch",u;var n})(),d=s(7537);let C=(()=>{class n{constructor(){this.ratingClick=new t.vpe}ngOnChanges(){console.log("ng on change",this.rating),this.starWidth=16*this.rating}ngOnInit(){console.log("ng on init")}onRating(){this.ratingClick.emit(this.rating)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-star"]],inputs:{rating:"rating"},outputs:{ratingClick:"ratingClick"},features:[t.TTD],decls:7,vars:4,consts:[[1,"crop",3,"click"],[1,"bi","bi-star-fill"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.onRating()}),t.TgZ(1,"div"),t._UZ(2,"i",1),t._UZ(3,"i",1),t._UZ(4,"i",1),t._UZ(5,"i",1),t._UZ(6,"i",1),t.qZA(),t.qZA()),2&e&&(t.Udp("width",o.starWidth,"px"),t.xp6(1),t.Udp("width",80,"px"))},styles:[".crop[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden}"]}),n})(),T=(()=>{class n{transform(e,o="-",c=" "){return e.replace(o,c)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"convertToSpaces",type:n,pure:!0}),n})();function b(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().filterProducts(a)}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw();t.ekj("selected-category","category"===o.selectedCategory),t.xp6(1),t.hij(" ",t.lcZ(2,3,e)," ")}}const P=function(n){return["/products",n]};function x(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",16),t.TgZ(1,"div",17),t._UZ(2,"img",18),t.TgZ(3,"div",19),t.TgZ(4,"h2",20),t.TgZ(5,"a",21),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.qZA(),t.TgZ(8,"h6",20),t._uU(9),t.ALo(10,"convertToSpaces"),t.qZA(),t.TgZ(11,"h6",22),t._uU(12),t.ALo(13,"slice"),t.qZA(),t.TgZ(14,"h6",20),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",20),t.TgZ(18,"strong"),t._uU(19,"Rating "),t.qZA(),t._uU(20,": "),t.TgZ(21,"app-star",23),t.NdJ("ratingClick",function(c){return t.CHM(e),t.oxw(2).onRatingClick(c)}),t.qZA(),t.TgZ(22,"button",24),t.NdJ("click",function(){return t.CHM(e).$implicit.rating=2}),t._uU(23," change rating "),t.qZA(),t.qZA(),t.TgZ(24,"p",20),t._uU(25),t.ALo(26,"date"),t.qZA(),t.TgZ(27,"a",25),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).addToCart()}),t._uU(28,"Add to Cart"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw(2);t.xp6(1),t.Udp("width",18,"rem"),t.ekj("featured",e.featured),t.Q6J("ngClass",o.classList)("ngStyle",o.styleList),t.uIk("aria-label","card"),t.xp6(1),t.Q6J("src",e.image,t.LSH)("alt",e.name),t.xp6(3),t.Q6J("routerLink",t.VKq(35,P,e.id)),t.xp6(1),t.hij(" ",t.lcZ(7,17,e.name)," "),t.xp6(3),t.hij(" ",t.Dn7(10,19,e.code,"-","/")," "),t.xp6(2),t.s9C("title",e.description),t.xp6(1),t.hij(" ",t.Dn7(13,23,e.description,0,20)," "),t.xp6(3),t.hij(" ",t.gM2(16,27,e.price,"INR","Rs ","1.0-2")," "),t.xp6(6),t.Q6J("rating",e.rating),t.xp6(4),t.hij(" ",t.xi3(26,32,e.publishDate,"dd-MM-yy")," ")}}function v(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.YNc(2,x,29,37,"div",13),t.ALo(3,"slice"),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"div",14),t.TgZ(6,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().firstPage()}),t._uU(7," 1 "),t.qZA(),t.TgZ(8,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().secondPage()}),t._uU(9," 2 "),t.qZA(),t.TgZ(10,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().thirdPage()}),t._uU(11," 3 "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.Dn7(3,1,e.filteredProducts,e.startIndex,e.endIndex))}}function A(n,r){1&n&&t._uU(0," Loading Products... ")}function y(n,r){if(1&n&&(t.TgZ(0,"div",4),t.TgZ(1,"div",2),t.TgZ(2,"div",26),t._uU(3),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.hij(" ",e.errorMessage," ")}}const M=[{path:"",component:(()=>{class n{constructor(e){this.productService=e,this.classList={"class-1":!0,"class-2":!1},this.styleList={color:"#ffffff",border:"1px solid black"},this.startIndex=0,this.endIndex=6,this.categories=Object.values(u),this.counter=0,this.loading=!1,this.errorMessage=null,this.products=[],this.filteredProducts=this.products,this.selectedCategory="all",this._searchValue="",this._rangeFinder=0}ngOnInit(){this.loading=!0,this.errorMessage=null,this.productService.getProducts().subscribe({next:e=>{this.loading=!1,this.products=e,this.filteredProducts=e},error:e=>{this.loading=!1,console.log(e),this.errorMessage=e}})}incrementCounter(){}get searchValue(){return this._searchValue}set searchValue(e){this._searchValue=e,this.filteredProducts=this.products.filter(o=>o.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))}get rangeFinder(){return this._rangeFinder}set rangeFinder(e){this._rangeFinder=e,this.filteredProducts=this.products.filter(o=>o.price>=2e4*e)}clickMe(e){console.log("you clicked me",e)}filterProducts(e){this.selectedCategory=e||"All",this.filteredProducts=e?this.products.filter(o=>o.category===e):this.products,console.log(this.filteredProducts)}firstPage(){this.startIndex=0,this.endIndex=2}secondPage(){this.startIndex=2,this.endIndex=4}thirdPage(){this.startIndex=4,this.endIndex=6}onRatingClick(e){console.log("on click rating()",e)}addToCart(){this.productService.increementCartCount()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.M))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],decls:19,vars:8,consts:[[1,"container"],[1,"row","mb-3","mt-3"],[1,"col"],["type","text","id","exampleFormControlInput1","placeholder","Search...",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],["for","customRange3",1,"form-label"],["type","range","min","0","max","5","step","0.5","id","customRange3",1,"form-range",3,"ngModel","ngModelChange"],["role","group","aria-label","Basic outlined example",1,"btn-group"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button","class","btn btn-outline-primary",3,"selected-category","click",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["noProducts",""],["class","row",4,"ngIf"],["class","col d-flex justify-content-center mt-3",4,"ngFor","ngForOf"],["role","group","aria-label","Second group",1,"btn-group","me-2"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"col","d-flex","justify-content-center","mt-3"],[1,"card",3,"ngClass","ngStyle"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[3,"routerLink"],[1,"card-title",3,"title"],[3,"rating","ratingClick"],[1,"btn","btn-primary",3,"click"],["role","button",1,"btn","btn-primary",3,"click"],["role","alert",1,"alert","alert-danger"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"input",3),t.NdJ("ngModelChange",function(a){return o.searchValue=a}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",2),t.TgZ(6,"label",5),t._uU(7,"Range"),t.qZA(),t.TgZ(8,"input",6),t.NdJ("ngModelChange",function(a){return o.rangeFinder=a}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"div",2),t.TgZ(11,"div",7),t.TgZ(12,"button",8),t.NdJ("click",function(){return o.filterProducts()}),t._uU(13," All "),t.qZA(),t.YNc(14,b,3,5,"button",9),t.qZA(),t.qZA(),t.qZA(),t.YNc(15,v,12,5,"ng-container",10),t.YNc(16,A,1,0,"ng-template",null,11,t.W1O),t.YNc(18,y,4,1,"div",12),t.qZA()),2&e){const c=t.MAs(17);t.xp6(3),t.Q6J("ngModel",o.searchValue),t.xp6(5),t.Q6J("ngModel",o.rangeFinder),t.xp6(4),t.ekj("selected-category","All"===o.selectedCategory),t.xp6(2),t.Q6J("ngForOf",o.categories),t.xp6(1),t.Q6J("ngIf",!o.loading)("ngIfElse",c),t.xp6(3),t.Q6J("ngIf",o.errorMessage)}},directives:[d.Fj,d.JJ,d.On,d.eT,i.sg,i.O5,i.mk,i.PC,l.yS,C],pipes:[i.rS,i.OU,i.gd,T,i.H9,i.uU],styles:[".card-img-top[_ngcontent-%COMP%]{height:18rem}.featured[_ngcontent-%COMP%]{background-color:#212529}.class-1[_ngcontent-%COMP%]{font-style:italic}.upper-button[_ngcontent-%COMP%]{padding:10px}.btn-outline-primary[_ngcontent-%COMP%]{background-color:#212529;color:#fff;border-color:#000}.btn-outline-primary[_ngcontent-%COMP%]:hover{background-color:#555}.selected-category[_ngcontent-%COMP%]{color:#fff;background-color:#212529;border-color:#000}.btn-secondary[_ngcontent-%COMP%]{color:#fff;background-color:#212529;border-color:#212529}"]}),n})()},{path:":id",canActivate:[m],component:Z}];let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[i.ez,l.Bz,_.m,k]]}),n})()}}]);
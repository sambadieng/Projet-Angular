import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductsActionsTypes {
  /*Get all products*/
   GET_ALL_PRODUCTS ="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS ="[Products] Get All products success",
  GET_ALL_PRODUCTS_ERROR  ="[Products] Get All products error",
  /*Get selected products*/
  GET_SELECTED_PRODUCTS ="[Products] Get selected products",
  GET_SELECTED_PRODUCTS_SUCCESS ="[Products] Get selected products success",
  GET_SELECTED_PRODUCTS_ERROR  ="[Products] Get selected products error",

  /*search products*/
  SEARCH_PRODUCTS ="[Products] search products",
  SEARCH_PRODUCTS_SUCCESS ="[Products] search products success",
  SEARCH_PRODUCTS_ERROR  ="[Products] search products error",

   /*select products*/
   SELECT_PRODUCTS ="[Products] select products",
   SELECT_PRODUCTS_SUCCESS ="[Products] select products success",
   SELECT_PRODUCTS_ERROR  ="[Products] select products error",

   
   /*delet products*/
   DELETE_PRODUCTS ="[Products] delete products",
   DELETE_PRODUCTS_SUCCESS ="[Products] delete products success",
   DELETE_PRODUCTS_ERROR  ="[Products] delete products error",

    /*new products*/
    NEW_PRODUCTS ="[Products] new products",
    NEW_PRODUCTS_SUCCESS ="[Products] new products success",
    NEW_PRODUCTS_ERROR  ="[Products] new products error",
     /*save products*/
     SAVE_PRODUCTS ="[Products] save products",
     SAVE_PRODUCTS_SUCCESS ="[Products] save products success",
     SAVE_PRODUCTS_ERROR  ="[Products] save products error",
     /*edit products*/
     EDIT_PRODUCTS ="[Products] edit products",
     EDIT_PRODUCTS_SUCCESS ="[Products] edit products success",
     EDIT_PRODUCTS_ERROR  ="[Products] edit products error",
      /*update products*/
      UPDATE_PRODUCTS ="[Products] update products",
      UPDATE_PRODUCTS_SUCCESS ="[Products] update products success",
      UPDATE_PRODUCTS_ERROR  ="[Products] update products error",
}
/*Get all products action*/
export class GetAllProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any){

  }
}

export class GetAllProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}
export class GetAllProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}
 
 /*Get selected products action*/
export class GetSelectedProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any){

  }
}
export class GetSelectedProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}
export class GetSelectedProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}

/*search product products action*/
export class SearchProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload:string){

  }
}
export class SearchProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}
export class SearchProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}

/*select  products action*/
export class SelectProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCTS;
  constructor(public payload:Product){

  }
}
export class SelectProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}
export class SelectProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}
/*delete products action*/
export class DeleteProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCTS;
  constructor(public payload:Product){

  }
}
export class DeleteProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}
export class DeleteProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}

/*new products action*/
export class NewProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCTS;
  constructor(public payload:any){

  }
}
export class NewProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCTS_SUCCESS;
  constructor(public payload:any){

  }
}
export class NewProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}
/*save products action*/
export class SaveProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCTS;
  constructor(public payload:Product){

  }
}
export class SaveProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}
export class SaveProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}
/*edit products action*/
export class EditProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.EDIT_PRODUCTS;
  constructor(public payload:number){

  }
}
export class  EditProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.EDIT_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}
export class EditProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.EDIT_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}

/*update products action*/
export class UpdateProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUCTS;
  constructor(public payload:Product){

  }
}
export class  UpdateProductsActionSuccess implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){

  }
}
export class UpdateProductsActionError implements Action {
  type:ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUCTS_ERROR;
  constructor(public payload:string){
    
  }
}
 
export type ProductsActions= 
               GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
               |GetSelectedProductsAction |GetSelectedProductsActionSuccess | GetSelectedProductsActionError
               |SearchProductsAction |SearchProductsActionSuccess | SearchProductsActionError
               |SelectProductsAction |SelectProductsActionSuccess | SelectProductsActionError
               |DeleteProductsAction |DeleteProductsActionSuccess | DeleteProductsActionError
               |NewProductsAction |NewProductsActionSuccess | NewProductsActionError
               |SaveProductsAction |SaveProductsActionSuccess | SaveProductsActionError
               |EditProductsAction |EditProductsActionSuccess | EditProductsActionError
               |UpdateProductsAction |UpdateProductsActionSuccess | UpdateProductsActionError
               ;

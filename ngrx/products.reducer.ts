
import { Action } from "@ngrx/store";
import { map } from "rxjs";
import { Product } from "../model/product.model";
import { ProductsActions, ProductsActionsTypes } from "./products.actions";

export  enum ProductsStateEnum{
    LOADING="loading",
    LOADED="loaded",
    ERROR="error",
    INITIAL="initial",
    NEW="new",
    EDIT="edit",
    UPDATED="updated"
}
export  interface ProductsState{
    products:Product [],
    errorMessage:string,
    dataState:ProductsStateEnum,
    currentproduct:Product|null,
    currentAction:ProductsActions|null
}
const initState:ProductsState={
    products:[],
    errorMessage:"",
    dataState:ProductsStateEnum.INITIAL,
    currentproduct:null,
    currentAction:null
}

export function productsReducer (state:ProductsState=initState,action:Action):ProductsState {
    switch(action.type){
        /* get all products*/
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return{...state, dataState:ProductsStateEnum.LOADED,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
         /* get selected products*/
            case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
                return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action}
            case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
                return{...state, dataState:ProductsStateEnum.LOADED,products:(<ProductsActions> action).payload}
            case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
                return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
           /* search products*/
           case ProductsActionsTypes.SEARCH_PRODUCTS:
                  return {...state, dataState:ProductsStateEnum.LOADING}
            case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
                  return{...state, dataState:ProductsStateEnum.LOADED,products:(<ProductsActions> action).payload}
             case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
                   return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
      
                   /* select products*/
           case ProductsActionsTypes.SELECT_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING}
      case ProductsActionsTypes.SELECT_PRODUCTS_SUCCESS:
                  let product=(<ProductsActions>action).payload
                  let listsproducts=[...state.products];
                  let data: Product[] =  listsproducts.map(p=>p.id==product.id?product:p);
            return{...state, dataState:ProductsStateEnum.LOADED,products:data}
       case ProductsActionsTypes.SELECT_PRODUCTS_ERROR:
             return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}

              /* delete products*/
           case ProductsActionsTypes.DELETE_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING}
      case ProductsActionsTypes.DELETE_PRODUCTS_SUCCESS:
                  let p=(<ProductsActions>action).payload
                  let index=state.products.indexOf(p)
                  let productsList=[...state.products];
                   productsList.splice(index,1);
            return{...state, dataState:ProductsStateEnum.LOADED,products:productsList}
       case ProductsActionsTypes.DELETE_PRODUCTS_ERROR:
             return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
       
             /* new products*/
           case ProductsActionsTypes.NEW_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING}
      case ProductsActionsTypes.NEW_PRODUCTS_SUCCESS:            
            return{...state, dataState:ProductsStateEnum.NEW}
       case ProductsActionsTypes.NEW_PRODUCTS_ERROR:
             return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
               /* save products*/
           case ProductsActionsTypes.SAVE_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING}
      case ProductsActionsTypes.SAVE_PRODUCTS_SUCCESS:     
                    let prods: Product[]= [...state.products];
                    prods.push((<ProductsActions>action).payload)

            return{...state, dataState:ProductsStateEnum.LOADED,products:prods}
       case ProductsActionsTypes.NEW_PRODUCTS_ERROR:
             return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
                /* edite products*/
           case ProductsActionsTypes.EDIT_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING}
      case ProductsActionsTypes.EDIT_PRODUCTS_SUCCESS:     
            return{...state, dataState:ProductsStateEnum.LOADED,currentproduct:(<ProductsActions>action).payload }
       case ProductsActionsTypes.EDIT_PRODUCTS_ERROR:
             return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
              /* update products*/
           case ProductsActionsTypes.UPDATE_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING}
      case ProductsActionsTypes.UPDATE_PRODUCTS_SUCCESS:     
      let updatedProduct=(<ProductsActions>action).payload
      let updatedProducts:Product [] =state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p );
            return{...state, dataState:ProductsStateEnum.UPDATED,products:updatedProducts}
       case ProductsActionsTypes.EDIT_PRODUCTS_ERROR:
             return {...state ,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions> action).payload}
            default :return {...state}            

    }
}
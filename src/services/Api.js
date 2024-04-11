import { commonrequest  } from "./ApiCall";
import {BASE_URL} from './helper'

export const cropgetfunc = async (search,page)=>{
    return await commonrequest("GET",`${BASE_URL}/crops?search=${search}&page=${page}`,"")  //?search=${search}  query params do multiple work like search sort filter in one api
}
import axios from "axios";
import {url_fn} from "./urlmaker";
import { type QueryFunction, type QueryFunctionContext } from "@tanstack/react-query";
import {config} from "./config"
export const getmethod = async (urls:string[])=>(await axios.get(url_fn([])).then((resp)=>(resp.data)));


export const querygetmethod:QueryFunction<any, any[], never> = async ({queryKey}:QueryFunctionContext<string[]> )=>(await getmethod(queryKey));


export const postmethod = async(urls: string[], data: any)=>(await axios.post(url_fn(urls), data, {headers:{...config}} ));
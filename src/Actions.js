import * as types from "./type"

export const add = (payload) => ({
    type: types.Add_PRODUCT,
    payload
})

export const remove = (payload) => ({
    type: types.REMOVE_PRODUCT,
    payload
})

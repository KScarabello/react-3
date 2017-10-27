import axios from 'axios';

const initialState = {
    tdList: [],
    

}

const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const PUT = 'PUT';

// const GET_ALL_TASKS
export default function reducer(state = initialState, action){
    switch(action.type){

        case GET + '_FULFILLED':
        return Object.assign({}, state, {tdList: action.payload});

        case MODIFY:
        return Object.assign({}, state, {})

        
    }
}

export function modifyTaskName(string){
    return{
        type: MODIFY_TASK_NAME,
        payload: string
    }
}


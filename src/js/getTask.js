import createQuestion from "./createQuestion"
import createOptions from "./createOptions"
import createControlls from "./createControlls"

export default function getTask () {

    return {
        questionP: createQuestion(),
        optionsUl: createOptions(),
        controlls: createControlls(),
    }
}

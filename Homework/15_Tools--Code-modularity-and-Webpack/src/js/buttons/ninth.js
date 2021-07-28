import { homeworkFunctionsObject as functions } from '../functions'
import regeneratorRuntime from 'regenerator-runtime'

functions.eleven.lengthInput.onchange = event => {
	functions.eleven.getChinese(event.target.value).then(string => {
		functions.eleven.resultBlock.textContent = string
	})
}

import { homeworkFunctionsObject as functions } from '../functions'
import regeneratorRuntime from 'regenerator-runtime'

functions.eleventh.lengthInput.onchange = event => {
	functions.eleventh.getChinese(event.target.value).then(string => {
		functions.eleventh.resultBlock.textContent = string
	})
}

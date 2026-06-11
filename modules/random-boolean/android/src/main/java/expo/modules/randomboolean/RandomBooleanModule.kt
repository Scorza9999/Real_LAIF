package expo.modules.randomboolean

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class RandomBooleanModule : Module() {
    private val moduleScope = CoroutineScope(Dispatchers.Default)

    override fun definition() = ModuleDefinition { 
        Name("RandomBoolean")

        AsyncFunction("Random") { promise: expo.modules.kotlin.Promise -> 
            moduleScope.launch {
                try {
                    val result = withContext(Dispatchers.Default) {
                        executeRandom()
                    }
                    promise.resolve(result)
                } catch (e: Exception) {
                    promise.reject("ERR_RANDOM_BOOL_ERROR", e.message, e)
                }
            } 
        }
    }

    // Safely placed inside the class boundaries
    private fun executeRandom(): Boolean {
        return Math.random() > 0.5
    }
}
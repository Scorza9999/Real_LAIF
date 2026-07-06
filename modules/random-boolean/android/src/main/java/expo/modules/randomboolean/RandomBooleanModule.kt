package expo.modules.randomboolean

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
// import kotlinx.coroutines.*

class RandomBooleanModule : Module() {

    override fun definition() = ModuleDefinition { 
        Name("RandomBoolean")

        AsyncFunction("Random") { uri: String -> executeRandom(uri)
        }
    }

    // insert code here
    private fun executeRandom(uri: String): Boolean {
        //TODO: make async and implement actual logic

        // let's start with the logic
        /*
        * basically we scan the raw bytes of the header
        * and we check if it contains some AI metadata
        */

        return Math.random() > 0.5
    }
}
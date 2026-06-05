package expo.modules.reallaif

import expo.modules.core.interfaces.DoNotStrip
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import kotlin.random.Random

class RealLaifModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("RealLaifModule")

    Function("getRandomBoolean") {
      return@Function Random.nextBoolean()
    }
  }
}

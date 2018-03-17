import vrControllers from 'three-vrcontroller-module'
import controllerMesh from '../world/controllerMesh'
import player from './player'
import vrControls from './vrControls'

vrControllers.controllers = []

window.addEventListener('vr controller connected', event => {
    const controller = event.detail
    player.add(controller)
    controller.standingMatrix = vrControls.getStandingMatrix()
    controller.meshGeometryIndex = 0
    updateControllerMesh(controller)
    vrControllers.controllers.push(controller)

    controller.addEventListener('thumbpad axes changed', setCyclingDirection)
    controller.addEventListener('thumbpad press began', cycleMesh)
})

const setCyclingDirection = event => event.target.cyclingDirection = event.axes[0] < 0 ? -1 : 1

const cycleMesh = event => {
    const controller = event.target
    controller.meshGeometryIndex += controller.cyclingDirection
    updateControllerMesh(controller)
}

const updateControllerMesh = controller => {
    if (controller.mesh) {
        controller.remove(controller.mesh)
        controller.mesh.geometry.dispose()
        controller.mesh.material.dispose()
    }

    const newMesh = controllerMesh(controller.meshGeometryIndex)
    controller.add(newMesh)
    controller.mesh = newMesh
}

export default vrControllers

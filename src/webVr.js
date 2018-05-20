import buildWebVr from 'webvr'
import scene from './world/scene'
import { onControllerConnected } from './world/controllerMesh'
import { enablePerformanceTesting } from './performance'
import {
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    PERSPECTIVE_FRUSTUM_FAR,
} from './spacetime'
import onAnimate from './onAnimate'

const camerasConfig = {
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    PERSPECTIVE_FRUSTUM_FAR,
}

const toggle = document.querySelector('#toggle')
const viewer = document.querySelector('#viewer')

const webVr = buildWebVr({ camerasConfig, scene, onAnimate, onControllerConnected, toggle, viewer })

if (process.env.NODE_ENV === 'development') enablePerformanceTesting(webVr)

export default webVr

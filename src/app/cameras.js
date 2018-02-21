import {OrthographicCamera, PerspectiveCamera} from 'threejs-full-es6'
import {
    ORTHOGRAPHIC_FRUSTUM_BOTTOM,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_LEFT,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    ORTHOGRAPHIC_FRUSTUM_RIGHT,
    ORTHOGRAPHIC_FRUSTUM_TOP,
    PERSPECTIVE_ASPECT_RATIO,
    PERSPECTIVE_FOV,
    PERSPECTIVE_FRUSTUM_FAR,
    PERSPECTIVE_FRUSTUM_NEAR
} from '../space'

const perspectiveCamera = new PerspectiveCamera(
    PERSPECTIVE_FOV,
    PERSPECTIVE_ASPECT_RATIO,
    PERSPECTIVE_FRUSTUM_NEAR,
    PERSPECTIVE_FRUSTUM_FAR
)

const orthographicCamera = new OrthographicCamera(
    ORTHOGRAPHIC_FRUSTUM_LEFT,
    ORTHOGRAPHIC_FRUSTUM_RIGHT,
    ORTHOGRAPHIC_FRUSTUM_TOP,
    ORTHOGRAPHIC_FRUSTUM_BOTTOM,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    ORTHOGRAPHIC_FRUSTUM_FAR,
)

let currentCamera

export {
    perspectiveCamera,
    orthographicCamera,
    currentCamera,
}

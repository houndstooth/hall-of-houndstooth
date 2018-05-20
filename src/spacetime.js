const WORLD_SCALE_UNIT = 333

const PERSPECTIVE_FRUSTUM_FAR = 5 * WORLD_SCALE_UNIT

const ORTHOGRAPHIC_FRUSTUM_NEAR = -10 * WORLD_SCALE_UNIT
const ORTHOGRAPHIC_FRUSTUM_FAR = 5 * WORLD_SCALE_UNIT

const DEFAULT_ITEM_POSITION = [0, 0, 0]
const DEFAULT_ITEM_SCALE = [1, 1, 1]
const DEFAULT_ITEM_ROTATION = [0, 0, 0]

const INITIAL_ORTHOGRAPHIC_POSITION = [WORLD_SCALE_UNIT, WORLD_SCALE_UNIT, WORLD_SCALE_UNIT]
const INITIAL_ORTHOGRAPHIC_TARGET = [0, 0, 0]

const AVERAGE_HUMAN_HEIGHT = 1.6

const DIRECTIONAL_LIGHT_POSITION = [150.14214, 150.28427, 150.07107]

const FOG_NEAR = 10
const FOG_FAR = 5 * WORLD_SCALE_UNIT

const CONTROLLER_SCALE = [0.05, 0.05, 0.05]

const MOVEMENT_SPEED = 0.125
const ROTATION_SPEED = 0.0125

const COURTYARD_SIZE = 2 * WORLD_SCALE_UNIT

const ELEVATION_EASING_TIME = 2000
const MOVEMENT_EASING_TIME = 800

const ELEVATION_TIER_HEIGHT = 10

export {
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    PERSPECTIVE_FRUSTUM_FAR,
    DEFAULT_ITEM_POSITION,
    DEFAULT_ITEM_ROTATION,
    DEFAULT_ITEM_SCALE,
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    DIRECTIONAL_LIGHT_POSITION,
    FOG_NEAR,
    FOG_FAR,
    CONTROLLER_SCALE,
    MOVEMENT_SPEED,
    ROTATION_SPEED,
    COURTYARD_SIZE,
    MOVEMENT_EASING_TIME,
    AVERAGE_HUMAN_HEIGHT,
    ELEVATION_EASING_TIME,
    ELEVATION_TIER_HEIGHT,
}

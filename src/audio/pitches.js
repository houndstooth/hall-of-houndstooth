const BASE_PITCH = 282
const SUPERTILE_PITCH_SET = [
    BASE_PITCH,
    BASE_PITCH * Math.sqrt(3),
    BASE_PITCH * 3 / 2,
    BASE_PITCH * 3 * Math.sqrt(3) / 4,
    BASE_PITCH * 9 / 8,
    BASE_PITCH * 9 * Math.sqrt(3) / 16,
]

const PERIMETER_BASE_PITCH = 141
const PERIMETER_PITCH_SET = [
    PERIMETER_BASE_PITCH,
    PERIMETER_BASE_PITCH * Math.sqrt(3),
    PERIMETER_BASE_PITCH * 3,
    PERIMETER_BASE_PITCH * 3 * Math.sqrt(3),
    PERIMETER_BASE_PITCH * 9,
    PERIMETER_BASE_PITCH * 9 * Math.sqrt(3),
    PERIMETER_BASE_PITCH * 27,
    PERIMETER_BASE_PITCH * 27 * Math.sqrt(3),
]

export {
    SUPERTILE_PITCH_SET,
    PERIMETER_PITCH_SET,
}

<template>
    <button
        :class="{
            'variant-default': !variant && 'default',
            'variant-outline': variant == 'outline',
            'variant-text': variant == 'text',
            'shadow-disabled': disableShadow,
            'shadow-default': !disableShadow,
            ['size-' + size]: size,
            ['color-' + color]: color,
            disabled: disabled,
        }"
    >
        <i v-if="startIcon" class="material-icons">{{ startIcon }}</i>
        {{ value }}
        <i v-if="endIcon" class="material-icons">{{ endIcon }}</i>
    </button>
</template>

<script>
export default {
    // This makes basic attributes modifiable from the parent.
    inheritAttrs: true,
    // Alternatively, I can add a v-bind="$attrs" if target element is not the root element.

    props: {
        value: {type: String, default: "Button"},
        variant: Number,
        disabled: Boolean,
        disableShadow: Boolean,
        startIcon: String,
        endIcon: String,
        size: String,
        color: String,
    },

    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

$background-gray: #e0e0e0;
$background-blue: #3d5afe;
$background-blue-2: #2962ff1a;
$font: "Noto Sans", sans-serif;

button {
    cursor: pointer;
    padding: 8px 20px;
    border-radius: 6px;
    border: none;
    font-family: $font;
    font-size: 14px;
    outline: 0;

    &:hover,
    &:focus {
        transform: translateY(-3px);
    }

    transition: all 150ms ease-out 0s;
    transform: translateY(0px);
}

// default 24px is just way too big for 14px text
i {
    font-size: 18px;
    vertical-align: middle;
}

.variant-default {
    background: $background-gray;

    &.disabled {
        box-shadow: none;
        background: darken($background-gray, 20);
        color: darken($background-gray, 40);
    }

    &.color-primary {
        color: #fff;
        background: #2962ff;

        &:hover,
        &:focus {
            background: darken(#2962ff, 18);
        }
    }

    &.color-secondary {
        color: #fff;
        background: #455a64;

        &:hover,
        &:focus {
            background: darken(#455a64, 18);
        }
    }

    &.color-danger {
        color: #fff;
        background: #d32f2f;

        &:hover,
        &:focus {
            background: darken(#d32f2f, 18);
        }
    }

    &:hover,
    &:focus {
        background: darken($background-gray, 20);
        box-shadow: 0px 4px 6px rgba(51, 51, 51, 0.2);
    }
}

.variant-outline {
    border: 1px solid #3d5afe;
    border-radius: 6px;
    background: none;
    color: #3d5afe;

    &.disabled {
        box-shadow: none;
        background: darken($background-blue-2, 20);
        color: lighten(#3d5afe, 10);
    }

    &.color-primary {
        border-color: #2962ff;
        color: #2962ff;
    }

    &.color-secondary {
        border-color: #455a64;
        color: #455a64;

        &:hover,
        &:focus {
            background-color: lighten(#455a64, 60);
        }
    }

    &.color-danger {
        border-color: #d32f2f;
        color: #d32f2f;

        &:hover,
        &:focus {
            background-color: lighten(#d32f2f, 40);
        }
    }

    &:hover,
    &:focus {
        background: $background-blue-2;
    }
}

.variant-text {
    background: none;
    color: #3d5afe;
    box-shadow: none;

    &.disabled {
        color: lighten(#3d5afe, 20);
        background: $background-blue-2;
    }

    &.color-secondary {
        color: #455a64;

        &:hover,
        &:focus {
            background-color: lighten(#455a64, 60);
        }
    }

    &.color-danger {
        color: #d32f2f;

        &:hover,
        &:focus {
            background-color: lighten(#d32f2f, 40);
        }
    }

    &.shadow-default {
        box-shadow: none;
    }

    &:hover,
    &:focus {
        background: $background-blue-2;
    }
}

.shadow-disabled {
    box-shadow: none !important;
}
.shadow-default {
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);

    &:hover,
    &:focus {
        box-shadow: 0px 5px 7px rgba(51, 51, 51, 0.2);
    }
}

.size-sm {
    padding: 6px 12px;
}
.size-md {
    padding: 8px 20px;
}
.size-lg {
    padding: 11px 22px;
}

.disabled {
    cursor: not-allowed;

    &:hover,
    &:focus {
        transform: translateY(0px);
        box-shadow: none;
    }
}
</style>
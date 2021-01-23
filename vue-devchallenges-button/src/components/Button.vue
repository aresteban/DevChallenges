<template>
    <button :class="{
        'variant-default': !variant && 'default', 
        'variant-outline': variant == 'outline', 
        'variant-text': variant == 'text',
        'shadow-disabled': disableShadow,
        'shadow-default': !disableShadow,
        ['size-' + size] : size,
        ['color-'+ color]: color,
        'disabled': disabled }">

            <i v-if="startIcon" class="material-icons">{{ startIcon }}</i>
            {{ value }}
            <i v-if="endIcon" class="material-icons">{{ endIcon }}</i>
        <!-- <div class="button-content">
        </div> -->
    </button>
</template>

<script>
export default {
    // This makes basic attributes modifiable from the parent. 
    inheritAttrs: true,
    // Alternatively, I can add a v-bind="$attrs" if target element is not the root element.

    props: {
        value: String, 
        variant: Number, 
        disabled: Boolean,
        disableShadow: Boolean,
        startIcon: String,
        endIcon: String,
        size: String,
        color: String
    },

    data() {
        return {
            
        }
    },


}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

    $background-gray: #E0E0E0;
    $background-blue: #3D5AFE;
    $background-blue-2: #2962ff1a;
    $font: 'Noto Sans', sans-serif;

    button { 
        cursor: pointer; 
        padding: 8px 20px;
        border-radius: 6px;
        border: none;
        font-family: $font;
        font-size: 14px; 

        &:hover, &:focus {
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

        &:hover, &:focus {
            background: darken($background-gray, 20);
            box-shadow: 0px 4px 6px rgba(51, 51, 51, 0.2);
        }
    }

    .variant-outline {
        border: 1px solid #3D5AFE;
        border-radius: 6px;
        background: none;
        color: #3D5AFE;
        
        &:hover, &:focus { background: $background-blue-2; }
    }

    .variant-text {
        background: none;
        color: #3D5AFE;
        box-shadow: none;

        &:hover, &:focus { background: $background-blue-2; }
    }

    .hoverable {
        &:hover, &:focus {
            // background: darken($background-gray, 20);
            transform: translate(0px, -3px);

        }
    }

    .shadow-disabled { box-shadow: none !important; }
    .shadow-default { 
        box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2); 
        
        &:hover, &:focus { box-shadow: 0px 5px 7px rgba(51, 51, 51, 0.2) }
    }
    
    .size-sm { padding: 6px 12px; }
    .size-md { padding: 8px 20px; }
    .size-lg { padding: 11px 22px; }

    // .color-default { }
    .color-primary { 
        color: #fff;
        background: #2962FF;

        &:hover, &:focus {
            background: darken(#2962FF, 18);
        }
    }

    .color-secondary { 
        color: #fff;
        background: #455A64;

        &:hover, &:focus {
            background: darken(#455A64, 18);
        }
    }
    .color-danger {
        color: #fff; 
        background: #D32F2F;

        &:hover, &:focus {
            background: darken(#D32F2F, 18);
        }
    }

    .disabled {
        cursor: not-allowed;
        color: lighten(#000, 20);
        background: lighten($background-gray, 20);

        &:hover, &:focus {
            transform: translateY(0px);
            box-shadow: none;
        }
    }
    // Remove hovered and pointer when disabled
</style>
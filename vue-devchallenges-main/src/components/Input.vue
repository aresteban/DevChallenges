<template>
    <div class="input-component" :class="{
            'variant-default': !error && !disabled,
            'variant-error': error,
            'disabled': disabled,
            'size-sm': size == 'sm',
            'size-md': size == 'md' || size == '' || size == null,
            'full-width': fullWidth,
        }">

        <input :id="id" type="text" 
        v-if="!rows"
        v-bind="$attrs"
        :value="value"
        :class="{
            'has-start-icon': startIcon,
            'has-end-icon': endIcon,
        }"
        :disabled="disabled">

        <textarea 
        v-else
        v-bind="$attrs"
        :value="value"
        :class="{
            'has-start-icon': startIcon,
            'has-end-icon': endIcon
        }"
        :disabled="disabled"
        :rows="rows"></textarea>

        <label :for="id">{{ label || 'Input' }}</label>
        <span v-if="helperText" class="helper-text">{{ helperText }}</span>
        <i v-if="startIcon" class="material-icons start-icon" :class="{'has-helper-text': helperText}" v-html="materialStartIcon"></i>
        <i v-if="endIcon" class="material-icons end-icon"  :class="{'has-helper-text': helperText}" v-html="materialEndIcon"></i>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        id: String,
        label: { type: String, default: "Input" },
        fieldType: String,
        error: Boolean,
        disabled: Boolean,
        helperText: String,
        startIcon: String,
        endIcon: String,
        value: String,
        size: String,
        fullWidth: Boolean,
        rows: Number
    },
    variant: String,

    computed: {
        materialStartIcon() {
            return this.startIcon;
        },

        materialEndIcon() {
            return this.endIcon;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$gray-1: #333333;
$gray-3: #828282;
$gray-5: #E0E0E0;
$gray-6: #F2F2F2;
$blue-1: #2962FF;
$red-1: #D32F2F;

.input-component { 
    display: inline-flex;
    // flex-direction: column;
    flex-direction: column-reverse;
    position: relative;

    label {
        display: block;
        font-size: 12px;
        margin-bottom: 4px;
    }

    textarea {
        resize: none;
    }

    input, textarea {
        outline: 0;
        border: 1px solid $gray-3;
        box-sizing: border-box;
        border-radius: 8px;

        padding: 18px 12px;
        font-size: 14px;

        color: $gray-3;

        &.has-start-icon { padding-left: 48px !important;  }

        &.has-end-icon { padding-right: 48px !important; }
    }

    &.variant-default {
        input, textarea {
            &:hover { border: 1px solid $gray-1; }

            &:focus { 
                border: 1px solid $blue-1;

                + label { color: $blue-1; }
            }
        }
    }

    &.variant-error {
        label { color: $red-1; }

        input, textarea {
            border: 1px solid $red-1;

            &:hover { 
                border: 1px solid $gray-1;

                + label { color: $gray-1; }
                ~ .helper-text { color: $gray-1; }
            }

            &:focus { 
                border: 1px solid $red-1;

                + label { color: $red-1; }
                ~ .helper-text { color: $red-1; }
            }
        }

        .helper-text { color: $red-1 }
    }

    &.disabled {

        input, textarea { 
            border: 1px solid $gray-5;
            cursor: not-allowed;
            background: $gray-6;
        }
    }

    .helper-text {
        margin: 4px 5px;
        color: $gray-3;
        font-size: 10px;
        line-height: 14px;

        order: -1;
    }

    .material-icons {
        position: absolute;
        color: $gray-3;
        
        &.start-icon {
            bottom: calc(50% - 24px);
            left: 15px;
        }

        &.end-icon {
            bottom: calc(50% - 24px);
            right: 15px;
        }

        &.has-helper-text.end-icon, &.has-helper-text.start-icon   {
            bottom: calc(62% - 24px);
        }
    }

    &.size-sm { 
        input, textarea { padding: 10px 12px; }
    }
    &.size-md { 
        input, textarea { padding: 12px 18px; }
    }
    &.full-width { 
        display: flex;
        width: 100%;
    }
}
</style>

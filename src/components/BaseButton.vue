<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  disabled?: boolean;
  type?: string;
  grow?: boolean;
  glow?: boolean | 'sm' | 'md' | 'lg';
  shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean | number;
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  transparent?: boolean;
  classes?: string;
  color?:
  | 'red'
  | 'blue'
  | 'green'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'gray'
  | 'gray-dark';
  outline?: boolean;
  tag?: string;
  size?: 'sm' | 'base' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  type: '',
  grow: false,
  glow: false,
  icon: null,
  shadow: false,
  border: false,
  rounded: false,
  transparent: false,
  classes: '',
  color: 'green',
  outline: false,
  tag: 'button',
  size: 'base',
})

const size =
  props.size === 'lg'
    ? 'h-16 py-3 px-4 text-xl'
    : props.size === 'sm'
      ? 'h-11 py-1 px-3 text-base'
      : 'h-12 py-2 px-4 text-lg'

const color =
  props.outline && props.color === 'green'
    ? 'bg-green-50 border-green-500 text-green-500 hover:bg-green-100'
    : props.outline && props.color === 'blue'
      ? 'bg-blue-50 border-blue-500 text-blue-500 hover:bg-blue-100'
      : props.outline && props.color === 'red'
        ? 'bg-red-50 border-red-500 text-red-500 hover:bg-red-100'
        : props.outline && props.color === 'pink'
          ? 'bg-pink-50 border-pink-500 text-pink-500 hover:bg-pink-100'
          : props.outline && props.color === 'gray'
            ? 'bg-gray-50 border-gray-500 text-gray-500 hover:bg-gray-200'
            : props.outline && props.color === 'gray-dark'
              ? 'bg-gray-50 border-gray-800 text-gray-800 hover:bg-gray-200'
              : props.outline && props.color === 'indigo'
                ? 'bg-indigo-50 border-indigo-500 text-indigo-500 hover:bg-indigo-100'
                : props.color === 'green'
                  ? 'bg-green-500 border-green-50 text-green-50 hover:bg-green-600'
                  : props.color === 'blue'
                    ? 'bg-blue-500 border-blue-50 text-blue-50 hover:bg-blue-600'
                    : props.color === 'red'
                      ? 'bg-red-500 border-red-50 text-red-50 hover:bg-red-600'
                      : props.color === 'pink'
                        ? 'bg-pink-500 border-pink-50 text-pink-50 hover:bg-pink-600'
                        : props.color === 'gray'
                          ? 'bg-gray-500 border-gray-50 text-gray-50 hover:bg-gray-600'
                          : props.color === 'gray-dark'
                            ? 'bg-gray-800 border-gray-50 text-gray-50 hover:bg-gray-900'
                            : props.color === 'indigo'
                              ? 'bg-indigo-500 border-indigo-50 text-indigo-50 hover:bg-indigo-600'
                              : ''

const border =
  props.border === 2
    ? 'border-2'
    : props.border === 3
      ? 'border-3'
      : props.border === 4
        ? 'border-4'
        : props.border
          ? 'border'
          : ''

const rounded =
  props.rounded === 'full'
    ? 'rounded-full'
    : props.rounded === 'xl'
      ? 'rounded-xl'
      : props.rounded === 'lg'
        ? 'rounded-lg'
        : props.rounded === 'sm'
          ? 'rounded-sm'
          : props.rounded
            ? 'rounded'
            : ''
</script>

<template>
  <component
    :is="props.tag"
    class="relative flex justify-center items-center leading-none font-semibold outline-0 focus:ring-4 outline-none"
    :class="[
      transparent ? 'bg-transparent' : color,
      border,
      rounded,
      size,
      { 'w-full': props.grow },
      { 'opacity-50 cursor-default': props.disabled },
    ]"
    :disabled="props.disabled"
    style="transform-style: preserve-3d"
    :type="props.tag === 'button' ? props.type : 'button'"
  >
    <slot>
      {{ text }}
    </slot>
    <div
      v-if="glow"
      class="absolute -inset-0.5 blur opacity-50"
      :class="[color, rounded]"
    />
  </component>
</template>

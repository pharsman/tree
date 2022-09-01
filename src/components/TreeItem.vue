<template>
    <div>
        <div @click="nodeClicked" :style="{ 'margin-left': `${depth * 20}px` }" class="node">
            <span v-if="hasChildren" class="type"> {{ expanded ? '&#9660;' : '&#9658' }}</span>
            <span v-else class="type def">&#9671;</span>
            <span  :style="getStyle(node)">{{ node.name }}</span>
        </div>
        <div v-if="expanded">
            <TreeItem v-for="child in node.children" :key="child.name" :node="child" :depth="depth + 1" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

function getStyle(node) {
    if (node.children) {
        return {
            'color': 'red'
        }
    }
}


const props = defineProps({
    node: {
        type: Object,
        required: true
    },
    depth: {
        type: Number,
        default: 0
    }
})


const nodeClicked = () => {
    expanded.value = !expanded.value
}

const expanded = ref(false)

const hasChildren = computed(() => {
    return props.node.children
})

</script>

<style lang="scss" scoped>
.node {
    text-align: left;
    font-size: 18px;

    .type {
        cursor: pointer;
        margin-right: 10px;
    }

    .def {
        cursor: default;
    }

}
</style>

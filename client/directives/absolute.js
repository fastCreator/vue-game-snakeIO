export default {
    name: 'absolute',
    call: {
        bind: function (el, binding, vnode, oldVnode) {
            el.style.left = binding.value.x + 'px'
            el.style.top = binding.value.y + 'px'
        },
        update: function (el, binding, vnode, oldVnode) {
            el.style.left = binding.value.x + 'px'
            el.style.top = binding.value.y + 'px'
        },

    }
}


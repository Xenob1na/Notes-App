<template>
     <div class="modal fixed z-[1] left-0 top-0 w-[100%] h-[100%] pt-[50px] overflow-auto ">
        <div class="bg-[#fefefe]  rounded-[5px] w-[30%] mx-auto lgMax:w-[50%] lg2:w-[60%] lgMax1:w-[40%]">
            <div class="container">
              <span  class="close text-[#aaa] float-right text-[28px] mb-[30px] font-semibold" aria-label="close" @click="closeModal">&times;</span>
            <form class="model-content" @click.prevent="">
              <input v-model="todo" type="text" class="text outline-none font-normal  leading-4 text-[#212529] bg-clip-padding border-solid  rounded-[8px]" placeholder="Your notes">
              <button class="text-[#fff] bg-[#54BD95] w-[100%] pt-3 pb-3 rounded-[12px] hover:bg-[#37785f] delay-[100ms] transition-all text-[16px] text-center" @click.prevent="addItemAndClear(todo)">Add</button>
            </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTodoListStore } from '../store/useTodoListStore';
import { ref } from 'vue';

const store = useTodoListStore()
const emit = defineEmits(['close'])
const todo = ref("");

function addItemAndClear(item) {
    if (item.length === 0) {
    return
  }
    store.addTodo(item)
    todo.value = ''
}
function closeModal() {
  emit('close')
}
</script>

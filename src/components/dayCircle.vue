<script setup>
// import {defineProps, defineEmit} from vue
import Empty from '../assets/svg/days/empty.svg?component'
import Box from '../assets/svg/days/box.svg?component'
import BoxFinish from '../assets/svg/days/box_finish.svg?component'
import BoxStart from '../assets/svg/days/box_start.svg?component'
import HolyBox from '../assets/svg/days/holy_box.svg?component'
import HolyFinish from '../assets/svg/days/holy_finish.svg?component'
import Holydday from '../assets/svg/days/holyday.svg?component'
import HolyStart from '../assets/svg/days/start_holy.svg?component'
import ShiftStart from '../assets/svg/days/shift_start.svg?component'
import Shift from '../assets/svg/days/shift.svg?component'
import ShiftFinish from '../assets/svg/days/shift_finish.svg?component'

const props = defineProps({
    status:String,
    error:Boolean,
    is_dayoff:Boolean,
})

</script>

<template>
    <main style="
    width: 40px;
    height: 40px;
    margin: 1px;"
    >
    <div >
        <article v-if='status=="empty"'>
            <Empty></Empty>
        </article>
        <article v-else-if='status=="box_start"'>
            <BoxStart></BoxStart>
        </article>
        <article  v-else-if='status=="box"'>
            <Box></Box>
        </article>
        <article  v-else-if='status=="box_holi"'>
            <HolyBox></HolyBox>
        </article>  
        <article  v-else-if='status=="holiday"'>
          <Holydday></Holydday>
        </article>
        <article  v-else-if='status=="holi_start"'>
            <HolyStart></HolyStart>
        </article>
        <article  v-else-if='status==="holi_finish"'>
            <HolyFinish></HolyFinish>
        </article>
        <article v-else-if="status === 'box_finish'">
            <BoxFinish></BoxFinish>
        </article>
        <article v-else-if="status === 'shift'">
            <Shift></Shift>
        </article>
        <article v-else-if="status === 'shift_start'">
            <ShiftStart></ShiftStart>
        </article>
        <article v-else-if="status === 'shift_finish'">
            <ShiftFinish></ShiftFinish>
        </article>
    </div>
    <div style="
        position: absolute;
        top: -1px;
        left: 15px;">
        <article v-if='is_dayoff'>
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0550874 1.022L24.9247 26.0592L24.9945 12.6822L25.0246 6.91944L24.7933 4.36486L23.7828 2.37846L22.2768 1.39107L20.2738 0.904619L17.7739 0.919134L11.774 0.953967L0.0550874 1.022Z" fill="#FF7A7A"/>
            </svg>
        </article>
    </div>
    
    </main>
</template>

<style scoped>

main{
    position: relative;
}

</style>
<script setup>
import { RouterView } from 'vue-router';
import { useUserStore } from '../../store/user.store'
import { storeToRefs } from 'pinia';
import ProfileModalMeny from './components/ProfileModalMeny.vue'
import { ref } from 'vue'
import p_selectbox from '../../components/p_selectbox.vue'
import p_input from '../../components/p_input.vue'


    // access the `store` variable anywhere in the component ✨
    const profileModal = ref(false);
    const store = useUserStore()
    const {
        name
    } = storeToRefs(store);

</script>

<template>
     <v-app
         style="background-color: #D1E3F4;
        overflow:hidden">
        <nav>
            <section>
                <v-navigation-drawer
                class="d-flex"
                style="align-content: space-around;
                background-color: #DCE6EF;
                font-family: 'Evolventa bold';
                color: #2E4E69;
                "
                
                
                >
                    <v-list>
                        Holidator
                    </v-list>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item link title="Кадры"></v-list-item>
                        <v-list-item link title="Расписание отпусков"></v-list-item>
                        <v-list-item link title="Структура отделов"></v-list-item>
                    </v-list>
                    

                    <template v-slot:append
                    style="height: 1;">
                        <!-- <v-divider></v-divider> -->
                        <ProfileModalMeny
                        v-if="profileModal"
                        style="
                        position: relative;
                        top: 10px;
                        left: 15px;
                        z-index: 100;
                        "></ProfileModalMeny>
                        <v-list-item link 
                        style="height: 56px;">
                            <section
                            style="display: flex;
                            flex-direction: row;
                            justify-content: start;"
                            
                            @click="() => {
                                profileModal = !profileModal;
                                console.log(profileModal);
                            }">
                            <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M10.8429 4.28125C10.8429 5.15149 10.4972 5.98609 9.88182 6.60144C9.26647 7.2168 8.43187 7.5625 7.56163 7.5625C6.69138 7.5625 5.85678 7.2168 5.24143 6.60144C4.62608 5.98609 4.28038 5.15149 4.28038 4.28125C4.28038 3.41101 4.62608 2.57641 5.24143 1.96106C5.85678 1.3457 6.69138 1 7.56163 1C8.43187 1 9.26647 1.3457 9.88182 1.96106C10.4972 2.57641 10.8429 3.41101 10.8429 4.28125V4.28125ZM1 16.6345C1.02812 14.9128 1.7318 13.2711 2.95928 12.0635C4.18676 10.8559 5.8397 10.1792 7.56163 10.1792C9.28355 10.1792 10.9365 10.8559 12.164 12.0635C13.3915 13.2711 14.0951 14.9128 14.1233 16.6345C12.0647 17.5784 9.82625 18.0656 7.56163 18.0625C5.22012 18.0625 2.99762 17.5515 1 16.6345Z" stroke="black" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                            <p
                            style="padding-left: 10px;">{{ name }}</p>
                            </section>
                        </v-list-item>
                    </template>
                </v-navigation-drawer>
                
            </section>
            
        </nav>

        <v-main>
            <RouterView></RouterView>
            <p_selectbox
                :width="350" 
                :variants='[{
                    text:"Разработчик 1С",
                    value:"hui"
                }]'
            ></p_selectbox>
            <p_input
                v-model="name"
            ></p_input>
        </v-main>
    </v-app>
</template>

<style scoped>

/* nav{
    height: 100%;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #DCE6EF;
    position: fixed;
    top: 0px;
    left: 0px;
} */

.block{
    justify-content: start;
    align-items: center;
    height: 42px;
    display: flex;
    width: 100%;
    padding-left: 15px;
}
</style>
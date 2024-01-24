import Vue from 'vue';
import VueRouter from 'vue-router';
import CriarAnotacao from '../views/CriarAnotacao.vue';
import ListarAnotacoes from '../views/ListarAnotacoes.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/criar', component: CriarAnotacao },
  { path: '/listar', component: ListarAnotacoes },
];
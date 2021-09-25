<template>
  <div>
      <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-8">
          <router-link
            :to="{ name: 'Index' }"
            class="btn btn-primary rounded shadow mb-3"
            >Kembali
          </router-link>

          <div class="card rounded shadow">
            <div class="card-header">
              Edit Tugas
            </div>

            <div class="card-body">
              <form @submit.prevent="update()">
                <div class="mb-3">
                  <label for="" class="form-label">Mata Kuliah</label>
                  <input type="text" class="form-control" v-model="transaction.mata_kuliah">
                  <div v-if="validation.mata_kuliah" class="text-danger">
                    {{ validation.mata_kuliah[0] }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Judul</label>
                  <input type="text" class="form-control" v-model="transaction.judul">
                  <div v-if="validation.judul" class="text-danger">
                    {{ validation.judul[0] }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Deadline</label>
                  <input type="text" class="form-control" placeholder="1 januari 2000" v-model="transaction.deadline">
                  <div v-if="validation.mata_deadline" class="text-danger">
                    {{ validation.deadline[0] }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Status</label>
                  <input type="text" class="form-control" placeholder="Sudah" v-model="transaction.status">
                  <div v-if="validation.status" class="text-danger">
                    {{ validation.status[0] }}
                  </div>
                </div>
                <button class="btn btn-outline-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
    name: 'Edit',

    setup() {
      // data binding
      let transaction = reactive({
        mata_kuliah: '',
        judul: '',
        deadline: '',
        status: '',
      });

      const validation = ref([]);

      const router = useRouter();
      const route = useRoute();


      onMounted(() => {
        axios.get(`http://localhost:3000/list-tugas/${route.params.id}`)
        .then((result) => {
          transaction.mata_kuliah = result.data.mata_kuliah
          transaction.judul = result.data.judul
          transaction.deadline = result.data.deadline
          transaction.status = result.data.status
        }).catch((err) => {
          console.log(err.response.data);
        })
      });


      function update() {
        axios.put(
          `http://localhost:3000/list-tugas/${route.params.id}`,
          transaction
        )
        .then(() => {
          router.push({
            name: 'Index'
          })

        }).catch((err) => {
            validation.value = err.response.data
        });
      }

      return {
        transaction,
        validation,
        router,
        update,
        
      }
    }
}
</script>

<style>

</style>
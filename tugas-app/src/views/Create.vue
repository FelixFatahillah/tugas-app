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
              Tambah Tugas
            </div>

            <div class="card-body">
              <form @submit.prevent="store()">
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
                  <div v-if="validation.deadline" class="text-danger">
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

import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Swal from "vue-sweetalert2"

export default {
    name: 'Create',

    setup() {
      // data binding
      const transaction = reactive({
        mata_kuliah: '',
        judul: '',
        deadline: '',
        status: '',
      });

      const validation = ref([]);

      const router = useRouter();


      function store() {
        axios.post(
          "http://localhost:3000/list-tugas",
          transaction
        )
        .then(() => {
          router.push({
            name: 'Index'
          }),
          Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})

        }).catch((err) => {
          console.log(err.response);
            validation.value = err.response.data
        });
      }

      return {
        transaction,
        validation,
        router,
        store,
        
      }
    }
}
</script>

<style>

</style>
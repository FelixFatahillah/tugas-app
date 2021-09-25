<template>
  <div>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-8">
          <router-link
            :to="{ name: 'Create' }"
            class="btn btn-primary rounded shadow mb-3"
            >Tambah Tugas
          </router-link>

          <div class="card rounded shadow">
            <div class="card-header">
              List Tugas
            </div>

            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Mata Kuliah</th>
                    <th>Judul Tugas</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="transaction in transactions" :key="transaction.id">
                    <td>{{ transaction.mata_kuliah }}</td>
                    <td>{{ transaction.judul }}</td>
                    <td>{{ transaction.deadline }}</td>
                    <td>{{ transaction.status }}</td>
                    <td>
                      <div class="btn-group">
                        <router-link :to="{ name: 'Edit', params:{id: transaction.id} }" class="btn btn-sm btn-outline-info">Edit</router-link>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "Index",

  // wadah data (parameter)
  data() {
    return {
      transactions: []
    }
  },
  // mengambil data dari mounted
  methods: {
    setTransactions(data) {
      this.transactions = data
    },
  },
  // mounted mengambil data dari API dengan endpoint (http://localhost:3000/best-products)
  mounted() {
    axios
      .get("http://localhost:3000/list-tugas")
      .then((response) => this.setTransactions(response.data))
        // kenapa response.data karena object berada di respon bagian data (jika di inspect)
      .catch((error) =>console.log("Gagal = ", error))
        // respon kalo gagal
  },
};
</script>

<style></style>

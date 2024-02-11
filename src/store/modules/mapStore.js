const mapStore = {
  namespaced: true,
  state: {
    hospital: {
      category_group_code: "HP8",
      category_group_name: "병원",
      list: [],
    },
    pharmacy: {
      category_group_code: "PM9",
      category_group_name: "약국",
    },
    location: {
      lat: 126.984801539439,
      lng: 37.5630391684739,
    },
  },
  getters: {},
  mutations: {
    SET_HOSPITAL: (state, hospital) => {
      state.hospital = hospital;
    },
    SET_PHARMACY: (state, pharmacy) => {
      state.pharmacy = pharmacy;
    },
    SET_LOCATION: (state, location) => {
      state.location = location;
    },
  },
  actions: {
    set_mapdata({ commit }, lists) {
      if (lists.length <= 0) {
        return;
      } else {
        const data = {
          category_group_code: lists[0].category_group_code,
          category_group_name: lists[0].category_group_name,
          list: [],
        };
        for (let i = 0; i < lists.length; i++) {
          const tmp = {
            address_name: lists[i].address_name,
            category_name: lists[i].category_name,
            distance: lists[i].distance,
            id: lists[i].id,
            phone: lists[i].phone,
            place_name: lists[i].place_name,
            place_url: lists[i].place_url,
            road_address_name: lists[i].road_address_name,
            x: lists[i].x,
            y: lists[i].y,
          };
          data.list.push(tmp);
        }
        if (lists[0].category_group_code == "HP8") {
          commit("SET_HOSPITAL", data);
        } else if (lists[0].category_group_code == "PM9") {
          commit("SET_PHARMACY", data);
        }
      }
    },
    clear_mapdata({ commit }, data) {
      const point = {
        category_group_code: data.category_group_code,
        category_group_name: data.category_group_name,
        list: [],
      };
      if (point.category_group_code == "HP8") {
        commit("SET_HOSPITAL", point);
      } else if (point.category_group_code == "PM9") {
        commit("SET_PHARMACY", point);
      }
    },
    set_hospital({ commit }, hospital) {
      commit("SET_HOSPITAL", hospital);
    },
    set_pharmacy({ commit }, pharmacy) {
      commit("SET_PHARMACY", pharmacy);
    },
    set_location({ commit }, location) {
      commit("SET_LOCATION", location);
    },
  },
};

export default mapStore;

const API_BASE_URL = "https://6a9b9b230ad174e139e8ba82.mockapi.io/api/v1/movie";

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Lỗi API: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

class Phim {
  constructor(id, name, image, description, duration, year, price) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.duration = duration;
    this.year = year;
    this.price = price;
  }

  static fromApi(data) {
    const releaseYear = data.year ?? data.namPhatHanh;
    const year = Number.isInteger(releaseYear)
      ? releaseYear
      : releaseYear
        ? new Date(releaseYear).getFullYear()
        : "";

    return new Phim(
      data.id,
      data.name ?? data.tenPhim,
      data.image ?? data.anhBia,
      data.description ?? data.moTa,
      data.duration ?? data.thoiLuong,
      year,
      data.price ?? data.gia
    );
  }

  static layDanhSach() {
    return new Promise((resolve, reject) => {
      fetch(API_BASE_URL)
        .then(handleResponse)
        .then(list => resolve(list.map(Phim.fromApi)))
        .catch(error => reject(error));
    });
  }

  static them(phim) {
    return new Promise((resolve, reject) => {
      fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(phim)
      })
        .then(handleResponse)
        .then(data => resolve(Phim.fromApi(data)))
        .catch(error => reject(error));
    });
  }

  static capNhat(id, changes) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changes)
      })
        .then(handleResponse)
        .then(data => resolve(Phim.fromApi(data)))
        .catch(error => reject(error));
    });
  }

  static xoa(id) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" })
        .then(handleResponse)
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
}


const form = document.getElementById("movie-form");
const fieldId = document.getElementById("field-id");
const fieldName = document.getElementById("field-name");
const fieldImage = document.getElementById("field-image");
const fieldDescription = document.getElementById("field-description");
const fieldDuration = document.getElementById("field-duration");
const fieldYear = document.getElementById("field-year");
const submitBtn = document.getElementById("submit-btn");
const cancelEditBtn = document.getElementById("cancel-edit-btn");
const formStatus = document.getElementById("form-status");
const formTitle = document.getElementById("form-title");

const movieGrid = document.getElementById("movie-grid");
const movieCount = document.getElementById("movie-count");
const emptyState = document.getElementById("empty-state");

const detailModal = document.getElementById("detail-modal");
const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");
const detailDuration = document.getElementById("detail-duration");
const detailYear = document.getElementById("detail-year");
const detailPrice = document.getElementById("detail-price");
const detailId = document.getElementById("detail-id");

let isEditing = false;
let currentMovies = [];

const cardTemplate = document.getElementById("movie-card-template");
const placeholderImg = "https://placehold.co/400x300/1a1a2e/ffffff?text=Phim";

function renderMovies(movies) {
  movieGrid.innerHTML = "";
  movieCount.textContent = `${movies.length} phim`;

  if (movies.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  const fragment = document.createDocumentFragment();

  for (const phim of movies) {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.id = phim.id;

    const img = card.querySelector(".movie-card__image");
    img.src = phim.image || placeholderImg;
    img.alt = phim.name;

    card.querySelector(".movie-card__year").textContent = phim.year ?? "";
    card.querySelector(".movie-card__name").textContent = phim.name;
    card.querySelector(".movie-card__meta").textContent = `${phim.duration ?? 0} phút | ${phim.year ?? ""}`;
    card.querySelector(".movie-card__desc").textContent = phim.description || "Chưa có mô tả.";

    fragment.appendChild(card);
  }

  movieGrid.appendChild(fragment);
}

async function refreshList() {
  try {
    const movies = await Phim.layDanhSach();
    currentMovies = movies;
    renderMovies(movies);
    return movies;
  } catch (err) {
    movieGrid.innerHTML = "";
    emptyState.hidden = false;
    emptyState.querySelector("p").textContent = "Không tải được dữ liệu từ API.";
    emptyState.querySelector(".empty-state__hint").textContent = "Kiểm tra lại đường truyền hoặc endpoint mockapi.io.";
    return [];
  }
}


function resetForm() {
  form.reset();
  fieldId.value = "";
  isEditing = false;
  formTitle.textContent = "Thêm phim";
  submitBtn.textContent = "Thêm phim";
  cancelEditBtn.hidden = true;
  formStatus.textContent = "";
  formStatus.removeAttribute("data-error");
}

function fillFormForEdit(phim) {
  isEditing = true;
  fieldId.value = phim.id;
  fieldName.value = phim.name || "";
  fieldImage.value = phim.image || "";
  fieldDescription.value = phim.description || "";
  fieldDuration.value = phim.duration ?? "";
  fieldYear.value = phim.year ?? "";
  formTitle.textContent = "Sửa phim";
  submitBtn.textContent = "Lưu thay đổi";
  cancelEditBtn.hidden = false;
  fieldName.focus();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    name: fieldName.value.trim(),
    image: fieldImage.value.trim(),
    description: fieldDescription.value.trim(),
    duration: Number(fieldDuration.value) || 0,
    year: Number(fieldYear.value) || 0
  };

  if (!payload.name) {
    formStatus.textContent = "Vui lòng nhập tên phim.";
    formStatus.dataset.error = "true";
    return;
  }

  submitBtn.disabled = true;
  formStatus.removeAttribute("data-error");
  formStatus.textContent = isEditing ? "Đang lưu..." : "Đang thêm...";

  try {
    if (isEditing) {
      await Phim.capNhat(fieldId.value, payload);
    } else {
      await Phim.them(payload);
    }
    await refreshList();
    resetForm();
  } catch (err) {
    formStatus.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
    formStatus.dataset.error = "true";
  } finally {
    submitBtn.disabled = false;
  }
});

cancelEditBtn.addEventListener("click", resetForm);


movieGrid.addEventListener("click", async (event) => {
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;

  const card = event.target.closest(".movie-card");
  const id = card.dataset.id;
  const phim = currentMovies.find((item) => item.id === id);
  if (!phim) return;

  const action = actionEl.dataset.action;

  if (action === "show") {
    openDetailModal(phim);
  } else if (action === "edit") {
    fillFormForEdit(phim);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (action === "delete") {
    const confirmed = window.confirm(`Xoá phim "${phim.name}"?`);
    if (!confirmed) return;
    try {
      await Phim.xoa(id);
      await refreshList();
      if (fieldId.value === id) resetForm();
    } catch (err) {
      window.alert("Xoá thất bại, thử lại sau.");
    }
  }
});


function openDetailModal(phim) {
  detailImage.src = phim.image || placeholderImg;
  detailImage.alt = phim.name;
  detailTitle.textContent = phim.name;
  detailDescription.textContent = phim.description || "Chưa có mô tả.";
  detailDuration.textContent = `${phim.duration ?? 0} phút`;
  detailYear.textContent = phim.year ?? "";
  detailPrice.textContent = phim.price != null && phim.price !== ""
    ? `$${Number(phim.price).toFixed(2)}`
    : "Chưa cập nhật";
  detailId.textContent = phim.id;
  detailModal.hidden = false;
}

detailModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    detailModal.hidden = true;
  }
});

refreshList();

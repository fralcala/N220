let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
  const digiResponse = fetch(`https://digimon-api.vercel.app/api/digimon
`);
  const digiData = await (await digiResponse).json();

  return digiData;
}

async function updateSelection() {
  const digimonPageRef = document.getElementById("digimonPage");

  const allDigimon = await getDigimon();

  totalPages = Math.ceil(allDigimon.length / 10);

  digimonPageRef.innerHTML += `<h3>Page ${
    currentPage + 1
  } of ${totalPages}</h3>`;

  digimonPageRef.innerHTML += `
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Level</th>
        </tr>
    </thead>
    <tbody id="digimonList"></tbody>
  </table>`;

  let pageNumbers = "";

  for (let i = 0; i < totalPages; i++) {
    pageNumbers += `<option value="${i + 1}" >${i + 1}</option>`;
  }

  digimonPageRef.innerHTML += `
  <div>
    <button onclick="goToPage(-1)">Previous Page</button>
    <select id="" onchange="changePage(event)">
        ${pageNumbers}
    </select>
    <button onclick="goToPage(1)">Next Page</button>
  </div>
  `;

  updatePage();
}

function changePage(e) {
  currentPage = Number(e.currentTarget.value);
  //   const selectRefValue = document.getElementById("pageNumber").value;
  //   console.log("e.currentTarget.value", e.currentTarget.value);
}

function goToPage(pageDirection) {
  if (pageDirection > 0) {
    if (currentPage === totalPages - 1) {
      alert("There are no additional pages");
    } else {
      currentPage++;
    }
  } else {
    if (currentPage === 0) {
      alert("This is the first page.");
    } else {
      currentPage--;
    }
  }
  document.getElementById("paegNumber");

  updatePage();
}

function goToPage(pageDirection) {
  if (pageDirection > 0) {
  } else {
  }
}

async function updatePage() {
  const h3Ref = document.querySelector("h3");
  const digimonListRef = document.querySelector("#digimonList");

  h3Ref.innerHTML = `Page ${currentPage + 1} of ${totalPages}`;

  const allDigimon = await getDigimon();

  let startingIndex = currentPage * 10;
  let endingIndex = currentPage * 10 + 10;

  digimonListRef.innerHTML = "";
  for (let i = startingIndex; i < endingIndex; i++) {
    if (i >= allDigimon.length) {
      continue;
    }

    const digimon = allDigimon[i];

    digimonListRef.innerHTML += `
  
        <tr>
            <td>${startingIndex + i}</td>
            <td>${digimon.name}</td>
            <td>
                <img src="${digimon.img}" height="70"/>
            </td>
            <td>${digimon.level}</td>
        </tr>
    `;
  }
}

updateSelection();

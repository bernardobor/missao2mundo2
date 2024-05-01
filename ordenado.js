// Função para trocar os valores de duas posições de um vetor
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    
    }
    console.log("ẗeste");
};

// Função para ordenar um vetor de inteiros com Bubble Sort
const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

// Função para ordenar um vetor de inteiros com Selection Sort
const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
};

// Função para ordenar um vetor de inteiros com Quick Sort
const quick_sort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;
    const pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, end);
    quick_sort(arr, start, i - 1);
    quick_sort(arr, i + 1, end);
    return arr;
};

// Função de particionamento para o Quick Sort
const particionamento = (arr, start, end, pivot) => {
    let left = start;
    let right = end - 1;
    
    while (true) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot && right > start) {
            right--;
        }
        if (left >= right) {
            break;
        } else {
            swap(arr, left, right);
        }
    }
    swap(arr, left, end - 1);
    return left;
};


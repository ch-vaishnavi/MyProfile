const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 50) {
  
  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
  
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 1000) + 1; 
      
    // To create element "div"
    const bar = document.createElement("div");
  
    // To add class "bar" to "div"
    bar.classList.add("bar");
  
    // Provide height to the bar
    bar.style.height = `${value/3}px`;
  
    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${i * 20}px)`;
      
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("bar_id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;
    barLabel.style.display = "none";
      
    // Append "Label" to "div"
    bar.appendChild(barLabel);
  
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

async function sort(arr)
{
    var n = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        await heapify(arr, n, i);

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = parseInt(arr[0].childNodes[0].innerHTML);
        arr[0].childNodes[0].innerHTML = arr[i].childNodes[0].innerHTML ;
        arr[0].style.height = `${parseInt(arr[i].childNodes[0].innerHTML)/3}px`;
        arr[i].childNodes[0].innerHTML = temp ;
        arr[i].style.height = `${temp/3}px`;
        arr[i] = temp;
        arr[i].style.backgroundColor = " rgb(49, 226, 13)";

        // call max heapify on the reduced heap
        await heapify(arr, i, 0);
    }
  arr[0].style.backgroundColor = " rgb(49, 226, 13)";
}
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
async function heapify(arr, n, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root parseInt(arr[l+i].childNodes[0].innerHTML)
        var larEle = parseInt(arr[largest].childNodes[0].innerHTML);
        if (l < n && parseInt(arr[l].childNodes[0].innerHTML) > larEle)
            largest = l;
            larEle = parseInt(arr[largest].childNodes[0].innerHTML);
 
        // If right child is larger than largest so far
        if (r < n && parseInt(arr[r].childNodes[0].innerHTML) > larEle)
            largest = r;
            larEle = parseInt(arr[largest].childNodes[0].innerHTML);
 
        // If largest is not root
        if (largest != i) {
            var swap = parseInt(arr[i].childNodes[0].innerHTML);
            arr[i].style.backgroundColor = "red";
            arr[i].childNodes[0].innerHTML = larEle;
            arr[i].style.height = `${larEle/3}px`;
            arr[largest].style.backgroundColor = "yellow";
            arr[largest].childNodes[0].innerHTML = swap;
            arr[largest].style.height = `${swap/3}px`;
            await timeout(80);
            arr[i].style.backgroundColor = "turquoise";
            arr[largest].style.backgroundColor = "turquoise";
            // Recursively heapify the affected sub-tree
            await heapify(arr, n, largest);
            await timeout(100);
        }
    }
async function HeapSort(delay = 300)
{
  let bars = document.querySelectorAll(".bar");
  await sort(bars);

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";

  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";

  document.getElementById("Button5").disabled = false;
  document.getElementById("Button5").style.backgroundColor = "#6f459e";

  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}
function generateHeapSort(num = 20)
{
  for (let i = 0; i < num; i += 1) {
  
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 50) + 1; 
      
    // To create element "div"
    const bub = document.createElement("div");
  
    // To add class "bar" to "div"
    bub.classList.add("bub");
  
    // Provide height to the bar
    // bub.style.height = `${value/3}px`;
  
    // Translate the bar towards positive X axis 
    bub.style.transform = `translateX(${i * 10}px)`;
      
    // To create element "label"
    const bubLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    bubLabel.classList.add("bub_id");
  
    // Assign value to "label"
    bubLabel.innerHTML = value;
      
    // Append "Label" to "div"
    bub.appendChild(bubLabel);
  
    // Append "div" to "data-container div"
    container.appendChild(bub);
    container.style.margin = "40px";

    document.getElementById("Button4").innerHTML = "Heapify and Sort" ;

  }
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++){
        arr[l+i].style.backgroundColor = "red";
        L[i] =  parseInt(arr[l+i].childNodes[0].innerHTML); //arr[l + i];
    }
    await timeout(80);
    for (var j = 0; j < n2; j++){
        arr[m + 1 + j].style.backgroundColor = "yellow";
        R[j] = parseInt(arr[m + 1 + j].childNodes[0].innerHTML) //arr[m + 1 + j];
    }
    await timeout(80);
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k].style.height = `${L[i]/3}px`;
            arr[k].childNodes[0].innerHTML = L[i];
            arr[k].style.backgroundColor = "rgb(49, 226, 13)";
            i++;
        }
        else {
            arr[k].style.height = `${R[j]/3}px`;
            arr[k].childNodes[0].innerHTML = R[j];
            arr[k].style.backgroundColor = "rgb(49, 226, 13)";
            j++;
        }
        k++;
        await timeout(80);
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k].style.height = `${L[i]/3}px`;
      arr[k].childNodes[0].innerHTML = (L[i]) ;
      arr[k].style.backgroundColor = "rgb(49, 226, 13)";
        i++;
        k++;
        
        await timeout(80);
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k].style.height = `${R[j]/3}px`;
        arr[k].childNodes[0].innerHTML = (R[j]);
        arr[k].style.backgroundColor = "rgb(49, 226, 13)";
        j++;
        k++;
        await timeout(80);
    }
    
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
    await timeout(100);
}

async function MergeSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");

  //Merge Sort
  var l = 0;
  var r = bars.length-1;
  await mergeSort(bars,l,r);
  //
  // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
  
  
    // Provide lightgreen color to the ith bar
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#6f459e";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#6f459e";

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#6f459e";
  }

async function BubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
   for (var i = 0; i < bars.length -1 ; i += 1) {
  
    // Assign i to min_idx
    
  
    // Provide yellow color to the ith bar
    for (var j = 0 ; j < bars.length -i -1; j += 1) {
      
      // Provide red color to the jth bar
      // To pause the execution of code for 300 milliseconds
      bars[j].style.backgroundColor = "red";
        bars[j+1].style.backgroundColor = "yellow";
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
        );
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 > val2) {
        
      
        var temp1 = bars[j+1].style.height;
        var temp2 = bars[j+1].childNodes[0].innerText;
        bars[j+1].style.height = bars[j].style.height;
        bars[j].style.height = temp1;
        bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
        bars[j].childNodes[0].innerText = temp2;
        bars = document.querySelectorAll(".bar");
      }
      bars[j].style.backgroundColor = "turquoise";
      bars[j+1].style.backgroundColor = "turquoise";
      //bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    bars[bars.length - i - 1]
                .style.backgroundColor = "rgb(49, 226, 13)";
   }
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
  
  
    // Provide lightgreen color to the ith bar
    bars[0].style.backgroundColor = "rgb(49, 226, 13)";
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#6f459e";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#6f459e";

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#6f459e";
  }
  
// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide yellow color to the ith bar
    bars[i].style.backgroundColor = "yellow";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 20)
      );
  
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = "  turquoise";
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "  turquoise";
      }
    }
  
    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 50)
    );
  
    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "  turquoise";
  
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  
  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";

  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";

  document.getElementById("Button5").disabled = false;
  document.getElementById("Button5").style.backgroundColor = "#6f459e";

  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}
  
// Call "generatebars" function

generatebars();

// function to generate new random array 
 function generate()
{
  window.location.reload();
  //generatebars();
 }
  
//  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  

  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button5").disabled = true;
  document.getElementById("Button5").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button4").disabled = true;
  document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}
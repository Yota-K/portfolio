import React from 'react';
import useDarkMode from 'use-dark-mode';

const Logo: React.FC = () => {
  const darkMode = useDarkMode();
  return (
    <svg width="240" height="24" viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFAFAF" />
      <path
        d="M15.92 19.14C15.6933 19.14 15.4933 19.0733 15.32 18.94L9.46 14.36V18.14C9.46 18.3933 9.36 18.62 9.16 18.82C8.97333 19.02 8.74667 19.12 8.48 19.12C8.21333 19.12 7.98 19.0267 7.78 18.84C7.59333 18.64 7.5 18.4067 7.5 18.14V6.48C7.5 6.2 7.59333 5.96667 7.78 5.78C7.98 5.59333 8.21333 5.5 8.48 5.5C8.74667 5.5 8.97333 5.59333 9.16 5.78C9.36 5.96667 9.46 6.2 9.46 6.48V10.4L14.92 5.72C15.1067 5.56 15.32 5.48 15.56 5.48C15.8133 5.48 16.0333 5.58667 16.22 5.8C16.42 6 16.52 6.22667 16.52 6.48C16.52 6.77333 16.4067 7.02 16.18 7.22L10.14 12.4L16.52 17.38C16.7733 17.58 16.9 17.84 16.9 18.16C16.9 18.44 16.8 18.6733 16.6 18.86C16.4133 19.0467 16.1867 19.14 15.92 19.14ZM25.0695 19.32C24.8029 19.32 24.5829 19.2467 24.4095 19.1C24.2495 18.9533 24.1695 18.76 24.1695 18.52V18.24C23.6229 18.8267 22.8629 19.12 21.8895 19.12C21.1562 19.12 20.4962 18.94 19.9095 18.58C19.3229 18.22 18.8629 17.7133 18.5295 17.06C18.1962 16.3933 18.0295 15.64 18.0295 14.8C18.0295 13.8667 18.2295 12.9667 18.6295 12.1C19.0295 11.22 19.5895 10.5067 20.3095 9.96C21.0429 9.41333 21.8829 9.14 22.8295 9.14C23.4429 9.14 23.9962 9.22667 24.4895 9.4C24.9829 9.56 25.4962 9.76 26.0295 10V18.32C26.0295 18.5867 25.9362 18.82 25.7495 19.02C25.5629 19.22 25.3362 19.32 25.0695 19.32ZM22.0295 17.26C22.4162 17.26 22.7895 17.18 23.1495 17.02C23.5229 16.86 23.8295 16.6667 24.0695 16.44L24.1295 11.22C23.7429 11.06 23.3229 10.98 22.8695 10.98C22.2962 10.98 21.7895 11.16 21.3495 11.52C20.9095 11.8667 20.5695 12.3333 20.3295 12.92C20.0895 13.4933 19.9695 14.1067 19.9695 14.76C19.9695 15.5733 20.1495 16.1933 20.5095 16.62C20.8695 17.0467 21.3762 17.26 22.0295 17.26ZM29.8058 19.12C29.5524 19.12 29.3258 19.0267 29.1258 18.84C28.9258 18.6533 28.8258 18.44 28.8258 18.2V10.1C28.8258 9.83333 28.9191 9.60667 29.1058 9.42C29.3058 9.23333 29.5391 9.14 29.8058 9.14C30.0724 9.14 30.2991 9.23333 30.4858 9.42C30.6858 9.60667 30.7858 9.83333 30.7858 10.1V10.7C31.4391 9.63333 32.3324 9.1 33.4658 9.1C34.1458 9.1 34.6324 9.28667 34.9258 9.66C35.2324 10.0333 35.3858 10.48 35.3858 11V11.6C35.3858 11.8667 35.2924 12.0933 35.1058 12.28C34.9324 12.4533 34.7124 12.54 34.4458 12.54C34.1258 12.54 33.8858 12.4467 33.7258 12.26C33.5791 12.0733 33.5058 11.8467 33.5058 11.58V11.32C33.5058 11.1067 33.3591 11 33.0658 11C32.8258 11 32.5458 11.12 32.2258 11.36C31.9191 11.6 31.6658 11.8533 31.4658 12.12C31.1858 12.4667 30.9991 12.8133 30.9058 13.16C30.8258 13.5067 30.7858 13.92 30.7858 14.4L30.7658 18.2C30.7658 18.44 30.6658 18.6533 30.4658 18.84C30.2658 19.0267 30.0458 19.12 29.8058 19.12ZM39.6322 19.18C38.9122 19.18 38.3389 19.0267 37.9122 18.72C37.4855 18.4 37.1655 17.8267 36.9522 17C36.7389 16.1733 36.6322 14.9867 36.6322 13.44C36.6322 12.92 36.6522 12.3467 36.6922 11.72C36.7322 11.0933 36.7855 10.5667 36.8522 10.14C36.9055 9.80667 37.0055 9.55333 37.1522 9.38C37.2989 9.20667 37.5122 9.12 37.7922 9.12C38.0589 9.12 38.2855 9.2 38.4722 9.36C38.6589 9.52 38.7522 9.75333 38.7522 10.06L38.7122 10.62C38.5789 11.7533 38.5122 12.84 38.5122 13.88C38.5122 15.24 38.6255 16.1667 38.8522 16.66C39.0922 17.14 39.4189 17.38 39.8322 17.38C40.3122 17.38 40.8055 17.2533 41.3122 17C41.8189 16.7333 42.1789 16.48 42.3922 16.24C42.4722 16.16 42.5122 15.9933 42.5122 15.74L42.5522 10.04C42.5522 9.77333 42.6455 9.55333 42.8322 9.38C43.0322 9.20667 43.2522 9.12 43.4922 9.12C43.7455 9.12 43.9655 9.20667 44.1522 9.38C44.3522 9.55333 44.4522 9.77333 44.4522 10.04V18.16C44.4522 18.4133 44.3522 18.64 44.1522 18.84C43.9655 19.0267 43.7455 19.12 43.4922 19.12C43.2255 19.12 42.9855 19.04 42.7722 18.88C42.5722 18.7067 42.4722 18.4933 42.4722 18.24V18.02C41.9655 18.38 41.4922 18.6667 41.0522 18.88C40.6255 19.08 40.1522 19.18 39.6322 19.18ZM48.2438 19.12C48.0038 19.12 47.7838 19.0267 47.5838 18.84C47.3838 18.64 47.2838 18.4133 47.2838 18.16L47.2438 6.62C47.2438 6.36667 47.3371 6.14667 47.5238 5.96C47.7238 5.77333 47.9571 5.68 48.2238 5.68C48.5038 5.68 48.7304 5.78 48.9038 5.98C49.0904 6.16667 49.1838 6.39333 49.1838 6.66L49.2038 13.14C49.7638 12.66 50.4171 12.04 51.1638 11.28C51.9104 10.52 52.5438 9.82667 53.0638 9.2C53.2771 8.93333 53.5371 8.8 53.8438 8.8C54.1104 8.8 54.3304 8.88667 54.5038 9.06C54.6904 9.23333 54.7838 9.45333 54.7838 9.72C54.7838 9.94667 54.7171 10.14 54.5838 10.3C54.2371 10.7667 53.7971 11.28 53.2638 11.84C52.7438 12.4 52.2638 12.8867 51.8238 13.3L55.1238 17.44C55.2971 17.64 55.3838 17.8467 55.3838 18.06C55.3838 18.34 55.2904 18.58 55.1038 18.78C54.9304 18.9667 54.7038 19.06 54.4238 19.06C54.1038 19.06 53.8504 18.9467 53.6638 18.72C52.6238 17.32 51.6371 16.04 50.7038 14.88L50.3838 14.46C50.1038 14.6733 49.7171 14.94 49.2238 15.26V18.16C49.2238 18.4133 49.1304 18.64 48.9438 18.84C48.7571 19.0267 48.5238 19.12 48.2438 19.12ZM58.0698 8.3C57.8165 8.3 57.5898 8.2 57.3898 8C57.2032 7.8 57.1165 7.57333 57.1298 7.32L57.1498 6.58C57.1632 6.32667 57.2632 6.10667 57.4498 5.92C57.6365 5.73333 57.8565 5.64 58.1098 5.64C58.3632 5.64 58.5832 5.74 58.7698 5.94C58.9698 6.14 59.0632 6.36 59.0498 6.6L59.0298 7.36C59.0165 7.62667 58.9165 7.85333 58.7298 8.04C58.5565 8.21333 58.3365 8.3 58.0698 8.3ZM57.9698 19.12C57.7032 19.12 57.4698 19.0267 57.2698 18.84C57.0832 18.64 56.9898 18.4067 56.9898 18.14L57.0898 10.18C57.0898 9.91333 57.1832 9.68667 57.3698 9.5C57.5698 9.3 57.8032 9.2 58.0698 9.2C58.3498 9.2 58.5832 9.3 58.7698 9.5C58.9565 9.68667 59.0498 9.91333 59.0498 10.18L58.9498 18.14C58.9498 18.4067 58.8498 18.64 58.6498 18.84C58.4632 19.0267 58.2365 19.12 57.9698 19.12ZM65.5731 19.12C64.7731 19.12 64.0398 18.9267 63.3731 18.54C62.7065 18.1533 62.1798 17.6267 61.7931 16.96C61.4065 16.28 61.2131 15.54 61.2131 14.74C61.2131 13.8333 61.4265 12.9467 61.8531 12.08C62.2798 11.2133 62.8398 10.5067 63.5331 9.96C64.2265 9.41333 64.9598 9.14 65.7331 9.14C66.4398 9.14 67.0065 9.25333 67.4331 9.48C67.8731 9.69333 68.2998 10.04 68.7131 10.52C68.9131 10.7333 69.0131 10.9667 69.0131 11.22C69.0131 11.4733 68.9198 11.6933 68.7331 11.88C68.5465 12.0533 68.3198 12.14 68.0531 12.14C67.8798 12.14 67.7398 12.1133 67.6331 12.06C67.5398 12.0067 67.4265 11.9 67.2931 11.74C67.0665 11.4867 66.8398 11.2933 66.6131 11.16C66.3998 11.0267 66.1131 10.96 65.7531 10.96C65.3398 10.96 64.9198 11.14 64.4931 11.5C64.0798 11.86 63.7398 12.3333 63.4731 12.92C63.2198 13.4933 63.0931 14.0867 63.0931 14.7C63.0931 15.2333 63.2065 15.7 63.4331 16.1C63.6731 16.4867 63.9798 16.7867 64.3531 17C64.7265 17.2 65.1198 17.3 65.5331 17.3C66.0665 17.3 66.4998 17.2 66.8331 17C67.1798 16.8 67.4865 16.5267 67.7531 16.18C68.0065 15.8467 68.2931 15.68 68.6131 15.68C68.8665 15.68 69.0865 15.7733 69.2731 15.96C69.4598 16.1333 69.5531 16.3333 69.5531 16.56C69.5531 16.8267 69.4798 17.0533 69.3331 17.24C68.9465 17.76 68.4198 18.2067 67.7531 18.58C67.0865 18.94 66.3598 19.12 65.5731 19.12ZM72.2077 19.14C71.9543 19.14 71.7277 19.0467 71.5277 18.86C71.341 18.66 71.2477 18.4333 71.2477 18.18V6.66C71.2477 6.39333 71.341 6.16667 71.5277 5.98C71.7277 5.78 71.9677 5.68 72.2477 5.68C72.5143 5.68 72.7343 5.78 72.9077 5.98C73.081 6.16667 73.1677 6.39333 73.1677 6.66V10.96C73.6077 10.4 74.1077 9.95333 74.6677 9.62C75.2277 9.27333 75.7877 9.1 76.3477 9.1C77.401 9.1 78.141 9.63333 78.5677 10.7C78.9943 11.7533 79.2077 13.4267 79.2077 15.72C79.2077 17.0133 79.1877 17.8467 79.1477 18.22C79.1343 18.4733 79.0343 18.6867 78.8477 18.86C78.6743 19.0333 78.461 19.12 78.2077 19.12C77.9277 19.12 77.701 19.0333 77.5277 18.86C77.3543 18.6733 77.2677 18.4467 77.2677 18.18C77.2677 17.9133 77.2743 17.6933 77.2877 17.52L77.3077 15.86C77.3077 13.9267 77.201 12.6333 76.9877 11.98C76.7877 11.3267 76.5343 11 76.2277 11C75.841 11 75.4477 11.18 75.0477 11.54C74.6477 11.8867 74.301 12.28 74.0077 12.72C73.7277 13.1467 73.5277 13.4867 73.4077 13.74C73.2477 14.1 73.1677 14.5733 73.1677 15.16V18.14C73.1677 18.4467 73.0743 18.6933 72.8877 18.88C72.701 19.0533 72.4743 19.14 72.2077 19.14ZM82.8941 8.3C82.6407 8.3 82.4141 8.2 82.2141 8C82.0274 7.8 81.9407 7.57333 81.9541 7.32L81.9741 6.58C81.9874 6.32667 82.0874 6.10667 82.2741 5.92C82.4607 5.73333 82.6807 5.64 82.9341 5.64C83.1874 5.64 83.4074 5.74 83.5941 5.94C83.7941 6.14 83.8874 6.36 83.8741 6.6L83.8541 7.36C83.8407 7.62667 83.7407 7.85333 83.5541 8.04C83.3807 8.21333 83.1607 8.3 82.8941 8.3ZM82.7941 19.12C82.5274 19.12 82.2941 19.0267 82.0941 18.84C81.9074 18.64 81.8141 18.4067 81.8141 18.14L81.9141 10.18C81.9141 9.91333 82.0074 9.68667 82.1941 9.5C82.3941 9.3 82.6274 9.2 82.8941 9.2C83.1741 9.2 83.4074 9.3 83.5941 9.5C83.7807 9.68667 83.8741 9.91333 83.8741 10.18L83.7741 18.14C83.7741 18.4067 83.6741 18.64 83.4741 18.84C83.2874 19.0267 83.0607 19.12 82.7941 19.12ZM97.8063 19.12C96.6596 19.12 95.6596 18.8667 94.8063 18.36C93.9663 17.8533 93.3729 17.2333 93.0263 16.5C92.8796 16.18 92.8063 15.92 92.8063 15.72C92.8063 15.44 92.9063 15.2067 93.1063 15.02C93.3063 14.82 93.5463 14.72 93.8263 14.72C94.0663 14.72 94.2729 14.7867 94.4463 14.92C94.6196 15.0533 94.7463 15.2333 94.8263 15.46C95.0396 16.0333 95.4329 16.4733 96.0063 16.78C96.5796 17.0867 97.1929 17.24 97.8463 17.24C98.6729 17.24 99.3529 17.0467 99.8863 16.66C100.433 16.26 100.706 15.7733 100.706 15.2C100.706 14.76 100.486 14.36 100.046 14C99.6196 13.64 98.8863 13.3133 97.8463 13.02C96.4996 12.6467 95.4396 12.1667 94.6663 11.58C93.8929 10.98 93.5063 10.16 93.5063 9.12C93.5063 8.41333 93.6929 7.78667 94.0663 7.24C94.4529 6.68 94.9996 6.24667 95.7063 5.94C96.4129 5.63333 97.2396 5.48 98.1863 5.48C99.5463 5.48 100.613 5.74667 101.386 6.28C102.173 6.81333 102.566 7.52667 102.566 8.42C102.566 8.71333 102.473 8.96 102.286 9.16C102.1 9.36 101.866 9.46 101.586 9.46C101.346 9.46 101.14 9.38 100.966 9.22C100.793 9.06 100.693 8.86 100.666 8.62C100.613 8.24667 100.366 7.94 99.9263 7.7C99.4863 7.44667 98.9063 7.32 98.1863 7.32C97.2929 7.32 96.6129 7.47333 96.1463 7.78C95.6796 8.07333 95.4463 8.47333 95.4463 8.98C95.4463 9.44667 95.6863 9.84 96.1663 10.16C96.6463 10.48 97.4329 10.8 98.5263 11.12C99.8729 11.5067 100.893 12.0267 101.586 12.68C102.28 13.3333 102.626 14.14 102.626 15.1C102.626 15.8467 102.406 16.5267 101.966 17.14C101.526 17.7533 100.933 18.24 100.186 18.6C99.4529 18.9467 98.6596 19.12 97.8063 19.12ZM108.204 19.12C107.444 19.12 106.744 18.9133 106.104 18.5C105.478 18.0867 104.984 17.5267 104.624 16.82C104.264 16.1 104.084 15.32 104.084 14.48C104.084 13.5333 104.298 12.6533 104.724 11.84C105.151 11.0133 105.724 10.36 106.444 9.88C107.164 9.38667 107.938 9.14 108.764 9.14C109.524 9.14 110.218 9.35333 110.844 9.78C111.484 10.2067 111.984 10.7733 112.344 11.48C112.718 12.1867 112.904 12.9467 112.904 13.76C112.904 14.72 112.691 15.6133 112.264 16.44C111.838 17.2533 111.258 17.9067 110.524 18.4C109.804 18.88 109.031 19.12 108.204 19.12ZM108.204 17.32C108.671 17.32 109.118 17.16 109.544 16.84C109.971 16.52 110.311 16.0933 110.564 15.56C110.818 15.0267 110.944 14.46 110.944 13.86C110.944 13.3533 110.844 12.88 110.644 12.44C110.444 11.9867 110.171 11.6267 109.824 11.36C109.478 11.08 109.098 10.94 108.684 10.94C108.218 10.94 107.778 11.1067 107.364 11.44C106.964 11.76 106.644 12.1933 106.404 12.74C106.164 13.2733 106.044 13.8467 106.044 14.46C106.044 15.06 106.144 15.5733 106.344 16C106.558 16.4267 106.824 16.7533 107.144 16.98C107.478 17.2067 107.831 17.32 108.204 17.32ZM119.376 19.12C118.43 19.12 117.576 18.92 116.816 18.52C116.07 18.1067 115.483 17.5267 115.056 16.78C114.63 16.02 114.416 15.1267 114.416 14.1C114.416 13.26 114.603 12.46 114.976 11.7C115.363 10.9267 115.896 10.3067 116.576 9.84C117.27 9.37333 118.056 9.14 118.936 9.14C119.75 9.14 120.443 9.30667 121.016 9.64C121.603 9.96 122.043 10.3467 122.336 10.8C122.63 11.2533 122.776 11.66 122.776 12.02C122.776 12.1933 122.723 12.36 122.616 12.52C122.51 12.68 122.356 12.82 122.156 12.94L116.796 16.02C116.983 16.4333 117.31 16.7533 117.776 16.98C118.256 17.2067 118.79 17.32 119.376 17.32C120.15 17.32 120.81 17.0333 121.356 16.46C121.57 16.2467 121.79 16.14 122.016 16.14C122.283 16.14 122.503 16.2267 122.676 16.4C122.863 16.5733 122.956 16.7867 122.956 17.04C122.956 17.2533 122.876 17.4533 122.716 17.64C122.343 18.0533 121.843 18.4067 121.216 18.7C120.603 18.98 119.99 19.12 119.376 19.12ZM120.796 11.78C120.636 11.5 120.41 11.2933 120.116 11.16C119.823 11.0133 119.476 10.94 119.076 10.94C118.316 10.94 117.676 11.2 117.156 11.72C116.65 12.24 116.356 12.88 116.276 13.64C116.25 13.84 116.236 14.08 116.236 14.36L120.796 11.78ZM126.24 8.14C125.96 8.14 125.727 8.04 125.54 7.84C125.367 7.62667 125.294 7.39333 125.32 7.14L125.4 6.28C125.414 6.04 125.514 5.84667 125.7 5.7C125.9 5.55333 126.12 5.48 126.36 5.48C126.654 5.48 126.887 5.58667 127.06 5.8C127.247 6.01333 127.327 6.24667 127.3 6.5L127.22 7.36C127.207 7.6 127.094 7.79333 126.88 7.94C126.68 8.07333 126.467 8.14 126.24 8.14ZM124.66 22.4C124.114 22.4 123.6 22.2267 123.12 21.88C122.64 21.5333 122.274 21.1333 122.02 20.68C121.874 20.4267 121.8 20.2333 121.8 20.1C121.8 19.8467 121.894 19.6267 122.08 19.44C122.267 19.2533 122.5 19.16 122.78 19.16C123.207 19.16 123.514 19.3867 123.7 19.84C123.794 20.08 123.914 20.26 124.06 20.38C124.22 20.5133 124.394 20.58 124.58 20.58C124.82 20.58 125.007 20.4533 125.14 20.2C125.274 19.96 125.34 19.6 125.34 19.12C125.34 18.48 125.334 17.74 125.32 16.9C125.307 16.0467 125.294 15.2 125.28 14.36C125.24 12.56 125.22 11.1333 125.22 10.08C125.22 9.8 125.307 9.56667 125.48 9.38C125.667 9.19333 125.9 9.1 126.18 9.1C126.434 9.1 126.654 9.2 126.84 9.4C127.04 9.58667 127.14 9.80667 127.14 10.06L127.18 14.14C127.22 15.9933 127.24 17.5133 127.24 18.7C127.24 19.9133 127.007 20.8333 126.54 21.46C126.074 22.0867 125.447 22.4 124.66 22.4ZM131.175 8.3C130.922 8.3 130.695 8.2 130.495 8C130.309 7.8 130.222 7.57333 130.235 7.32L130.255 6.58C130.269 6.32667 130.369 6.10667 130.555 5.92C130.742 5.73333 130.962 5.64 131.215 5.64C131.469 5.64 131.689 5.74 131.875 5.94C132.075 6.14 132.169 6.36 132.155 6.6L132.135 7.36C132.122 7.62667 132.022 7.85333 131.835 8.04C131.662 8.21333 131.442 8.3 131.175 8.3ZM131.075 19.12C130.809 19.12 130.575 19.0267 130.375 18.84C130.189 18.64 130.095 18.4067 130.095 18.14L130.195 10.18C130.195 9.91333 130.289 9.68667 130.475 9.5C130.675 9.3 130.909 9.2 131.175 9.2C131.455 9.2 131.689 9.3 131.875 9.5C132.062 9.68667 132.155 9.91333 132.155 10.18L132.055 18.14C132.055 18.4067 131.955 18.64 131.755 18.84C131.569 19.0267 131.342 19.12 131.075 19.12ZM135.919 19.12C135.665 19.12 135.439 19.0267 135.239 18.84C135.052 18.6533 134.959 18.4333 134.959 18.18V10.1C134.959 9.84667 135.052 9.62667 135.239 9.44C135.439 9.24 135.665 9.14 135.919 9.14C136.185 9.14 136.412 9.24 136.599 9.44C136.785 9.62667 136.879 9.84667 136.879 10.1V11.5C137.705 9.92667 138.805 9.14 140.179 9.14C140.725 9.14 141.199 9.3 141.599 9.62C142.012 9.94 142.305 10.42 142.479 11.06C143.332 9.78 144.372 9.14 145.599 9.14C146.425 9.14 147.079 9.46 147.559 10.1C148.039 10.7267 148.279 11.6733 148.279 12.94V18.18C148.279 18.4333 148.179 18.6533 147.979 18.84C147.792 19.0267 147.572 19.12 147.319 19.12C147.052 19.12 146.825 19.0267 146.639 18.84C146.452 18.6533 146.359 18.4333 146.359 18.18V12.82C146.359 12.2067 146.272 11.7467 146.099 11.44C145.925 11.1333 145.652 10.98 145.279 10.98C144.892 10.98 144.505 11.1333 144.119 11.44C143.732 11.7467 143.412 12.1667 143.159 12.7C142.919 13.2333 142.799 13.82 142.799 14.46V18.18C142.799 18.4467 142.705 18.6733 142.519 18.86C142.332 19.0333 142.105 19.12 141.839 19.12C141.585 19.12 141.359 19.0267 141.159 18.84C140.972 18.6533 140.879 18.4333 140.879 18.18V12.82C140.879 12.18 140.799 11.7133 140.639 11.42C140.492 11.1267 140.245 10.98 139.899 10.98C139.472 10.98 139.052 11.1533 138.639 11.5C138.225 11.8333 137.865 12.24 137.559 12.72C137.319 13.12 137.139 13.52 137.019 13.92C136.912 14.32 136.859 14.76 136.859 15.24L136.879 18.18C136.879 18.4333 136.785 18.6533 136.599 18.84C136.412 19.0267 136.185 19.12 135.919 19.12ZM157.277 19.32C157.01 19.32 156.79 19.2467 156.617 19.1C156.457 18.9533 156.377 18.76 156.377 18.52V18.24C155.83 18.8267 155.07 19.12 154.097 19.12C153.363 19.12 152.703 18.94 152.117 18.58C151.53 18.22 151.07 17.7133 150.737 17.06C150.403 16.3933 150.237 15.64 150.237 14.8C150.237 13.8667 150.437 12.9667 150.837 12.1C151.237 11.22 151.797 10.5067 152.517 9.96C153.25 9.41333 154.09 9.14 155.037 9.14C155.65 9.14 156.203 9.22667 156.697 9.4C157.19 9.56 157.703 9.76 158.237 10V18.32C158.237 18.5867 158.143 18.82 157.957 19.02C157.77 19.22 157.543 19.32 157.277 19.32ZM154.237 17.26C154.623 17.26 154.997 17.18 155.357 17.02C155.73 16.86 156.037 16.6667 156.277 16.44L156.337 11.22C155.95 11.06 155.53 10.98 155.077 10.98C154.503 10.98 153.997 11.16 153.557 11.52C153.117 11.8667 152.777 12.3333 152.537 12.92C152.297 13.4933 152.177 14.1067 152.177 14.76C152.177 15.5733 152.357 16.1933 152.717 16.62C153.077 17.0467 153.583 17.26 154.237 17.26ZM169.262 19.12C168.995 19.12 168.762 19.0267 168.562 18.84C168.362 18.6533 168.262 18.42 168.262 18.14V6.72C168.262 6.34667 168.308 6.08 168.402 5.92C168.495 5.74667 168.668 5.63333 168.922 5.58C169.188 5.51333 169.615 5.48 170.202 5.48C172.682 5.48 174.535 5.84667 175.762 6.58C177.002 7.31333 177.622 8.37333 177.622 9.76C177.622 10.88 177.228 11.8 176.442 12.52C175.655 13.24 174.702 13.7667 173.582 14.1C172.462 14.4333 171.348 14.62 170.242 14.66V18.14C170.242 18.42 170.148 18.6533 169.962 18.84C169.775 19.0267 169.542 19.12 169.262 19.12ZM170.242 12.7C171.548 12.62 172.775 12.36 173.922 11.92C175.068 11.4667 175.642 10.7467 175.642 9.76C175.642 9.02667 175.195 8.46 174.302 8.06C173.422 7.66 172.162 7.46 170.522 7.46H170.242V12.7ZM182.696 19.12C181.936 19.12 181.236 18.9133 180.596 18.5C179.97 18.0867 179.476 17.5267 179.116 16.82C178.756 16.1 178.576 15.32 178.576 14.48C178.576 13.5333 178.79 12.6533 179.216 11.84C179.643 11.0133 180.216 10.36 180.936 9.88C181.656 9.38667 182.43 9.14 183.256 9.14C184.016 9.14 184.71 9.35333 185.336 9.78C185.976 10.2067 186.476 10.7733 186.836 11.48C187.21 12.1867 187.396 12.9467 187.396 13.76C187.396 14.72 187.183 15.6133 186.756 16.44C186.33 17.2533 185.75 17.9067 185.016 18.4C184.296 18.88 183.523 19.12 182.696 19.12ZM182.696 17.32C183.163 17.32 183.61 17.16 184.036 16.84C184.463 16.52 184.803 16.0933 185.056 15.56C185.31 15.0267 185.436 14.46 185.436 13.86C185.436 13.3533 185.336 12.88 185.136 12.44C184.936 11.9867 184.663 11.6267 184.316 11.36C183.97 11.08 183.59 10.94 183.176 10.94C182.71 10.94 182.27 11.1067 181.856 11.44C181.456 11.76 181.136 12.1933 180.896 12.74C180.656 13.2733 180.536 13.8467 180.536 14.46C180.536 15.06 180.636 15.5733 180.836 16C181.05 16.4267 181.316 16.7533 181.636 16.98C181.97 17.2067 182.323 17.32 182.696 17.32ZM190.528 19.12C190.275 19.12 190.048 19.0267 189.848 18.84C189.648 18.6533 189.548 18.44 189.548 18.2V10.1C189.548 9.83333 189.642 9.60667 189.828 9.42C190.028 9.23333 190.262 9.14 190.528 9.14C190.795 9.14 191.022 9.23333 191.208 9.42C191.408 9.60667 191.508 9.83333 191.508 10.1V10.7C192.162 9.63333 193.055 9.1 194.188 9.1C194.868 9.1 195.355 9.28667 195.648 9.66C195.955 10.0333 196.108 10.48 196.108 11V11.6C196.108 11.8667 196.015 12.0933 195.828 12.28C195.655 12.4533 195.435 12.54 195.168 12.54C194.848 12.54 194.608 12.4467 194.448 12.26C194.302 12.0733 194.228 11.8467 194.228 11.58V11.32C194.228 11.1067 194.082 11 193.788 11C193.548 11 193.268 11.12 192.948 11.36C192.642 11.6 192.388 11.8533 192.188 12.12C191.908 12.4667 191.722 12.8133 191.628 13.16C191.548 13.5067 191.508 13.92 191.508 14.4L191.488 18.2C191.488 18.44 191.388 18.6533 191.188 18.84C190.988 19.0267 190.768 19.12 190.528 19.12ZM199.355 19.14C199.102 19.14 198.875 19.0467 198.675 18.86C198.488 18.6733 198.395 18.4533 198.395 18.2V11.06H196.815C196.548 11.06 196.322 10.9667 196.135 10.78C195.948 10.58 195.855 10.3533 195.855 10.1C195.855 9.80667 195.955 9.57333 196.155 9.4C196.355 9.21333 196.588 9.12 196.855 9.12H198.395V6.98C198.395 6.72667 198.488 6.5 198.675 6.3C198.862 6.1 199.088 6 199.355 6C199.635 6 199.862 6.1 200.035 6.3C200.222 6.48667 200.315 6.71333 200.315 6.98V9.12H202.015C202.282 9.12 202.508 9.21333 202.695 9.4C202.882 9.58667 202.975 9.82 202.975 10.1C202.975 10.3533 202.882 10.58 202.695 10.78C202.508 10.9667 202.282 11.06 202.015 11.06H200.315V18.2C200.315 18.4533 200.222 18.6733 200.035 18.86C199.848 19.0467 199.622 19.14 199.355 19.14ZM205.497 19.12C205.244 19.12 205.017 19.0267 204.817 18.84C204.631 18.6533 204.537 18.44 204.537 18.2V10.96H203.617C203.377 10.96 203.164 10.8667 202.977 10.68C202.791 10.4933 202.697 10.28 202.697 10.04C202.697 9.78667 202.791 9.56667 202.977 9.38C203.164 9.19333 203.371 9.1 203.597 9.1H204.557C204.611 7.83333 204.951 6.94667 205.577 6.44C206.217 5.92 207.237 5.66 208.637 5.66C209.011 5.66 209.297 5.72667 209.497 5.86C209.697 5.99333 209.797 6.23333 209.797 6.58C209.797 6.84667 209.711 7.07333 209.537 7.26C209.377 7.43333 209.151 7.52 208.857 7.52C208.257 7.52 207.797 7.56 207.477 7.64C207.171 7.70667 206.937 7.85333 206.777 8.08C206.617 8.30667 206.517 8.64667 206.477 9.1L208.517 9.12C208.731 9.12 208.931 9.21333 209.117 9.4C209.317 9.58667 209.417 9.8 209.417 10.04C209.417 10.28 209.324 10.4933 209.137 10.68C208.964 10.8667 208.757 10.96 208.517 10.96H206.457V18.2C206.457 18.44 206.357 18.6533 206.157 18.84C205.971 19.0267 205.751 19.12 205.497 19.12ZM213.693 19.12C212.933 19.12 212.233 18.9133 211.593 18.5C210.966 18.0867 210.473 17.5267 210.113 16.82C209.753 16.1 209.573 15.32 209.573 14.48C209.573 13.5333 209.786 12.6533 210.213 11.84C210.639 11.0133 211.213 10.36 211.933 9.88C212.653 9.38667 213.426 9.14 214.253 9.14C215.013 9.14 215.706 9.35333 216.333 9.78C216.973 10.2067 217.473 10.7733 217.833 11.48C218.206 12.1867 218.393 12.9467 218.393 13.76C218.393 14.72 218.179 15.6133 217.753 16.44C217.326 17.2533 216.746 17.9067 216.013 18.4C215.293 18.88 214.519 19.12 213.693 19.12ZM213.693 17.32C214.159 17.32 214.606 17.16 215.033 16.84C215.459 16.52 215.799 16.0933 216.053 15.56C216.306 15.0267 216.433 14.46 216.433 13.86C216.433 13.3533 216.333 12.88 216.133 12.44C215.933 11.9867 215.659 11.6267 215.313 11.36C214.966 11.08 214.586 10.94 214.173 10.94C213.706 10.94 213.266 11.1067 212.853 11.44C212.453 11.76 212.133 12.1933 211.893 12.74C211.653 13.2733 211.533 13.8467 211.533 14.46C211.533 15.06 211.633 15.5733 211.833 16C212.046 16.4267 212.313 16.7533 212.633 16.98C212.966 17.2067 213.319 17.32 213.693 17.32ZM221.505 19.12C221.251 19.12 221.025 19.0333 220.825 18.86C220.638 18.6733 220.545 18.46 220.545 18.22V6.62C220.545 6.35333 220.631 6.13333 220.805 5.96C220.991 5.77333 221.225 5.68 221.505 5.68C221.758 5.68 221.978 5.77333 222.165 5.96C222.365 6.14667 222.465 6.36667 222.465 6.62V18.22C222.465 18.46 222.365 18.6733 222.165 18.86C221.965 19.0333 221.745 19.12 221.505 19.12ZM226.351 8.3C226.098 8.3 225.871 8.2 225.671 8C225.484 7.8 225.398 7.57333 225.411 7.32L225.431 6.58C225.444 6.32667 225.544 6.10667 225.731 5.92C225.918 5.73333 226.138 5.64 226.391 5.64C226.644 5.64 226.864 5.74 227.051 5.94C227.251 6.14 227.344 6.36 227.331 6.6L227.311 7.36C227.298 7.62667 227.198 7.85333 227.011 8.04C226.838 8.21333 226.618 8.3 226.351 8.3ZM226.251 19.12C225.984 19.12 225.751 19.0267 225.551 18.84C225.364 18.64 225.271 18.4067 225.271 18.14L225.371 10.18C225.371 9.91333 225.464 9.68667 225.651 9.5C225.851 9.3 226.084 9.2 226.351 9.2C226.631 9.2 226.864 9.3 227.051 9.5C227.238 9.68667 227.331 9.91333 227.331 10.18L227.231 18.14C227.231 18.4067 227.131 18.64 226.931 18.84C226.744 19.0267 226.518 19.12 226.251 19.12ZM233.614 19.12C232.854 19.12 232.154 18.9133 231.514 18.5C230.888 18.0867 230.394 17.5267 230.034 16.82C229.674 16.1 229.494 15.32 229.494 14.48C229.494 13.5333 229.708 12.6533 230.134 11.84C230.561 11.0133 231.134 10.36 231.854 9.88C232.574 9.38667 233.348 9.14 234.174 9.14C234.934 9.14 235.628 9.35333 236.254 9.78C236.894 10.2067 237.394 10.7733 237.754 11.48C238.128 12.1867 238.314 12.9467 238.314 13.76C238.314 14.72 238.101 15.6133 237.674 16.44C237.248 17.2533 236.668 17.9067 235.934 18.4C235.214 18.88 234.441 19.12 233.614 19.12ZM233.614 17.32C234.081 17.32 234.528 17.16 234.954 16.84C235.381 16.52 235.721 16.0933 235.974 15.56C236.228 15.0267 236.354 14.46 236.354 13.86C236.354 13.3533 236.254 12.88 236.054 12.44C235.854 11.9867 235.581 11.6267 235.234 11.36C234.888 11.08 234.508 10.94 234.094 10.94C233.628 10.94 233.188 11.1067 232.774 11.44C232.374 11.76 232.054 12.1933 231.814 12.74C231.574 13.2733 231.454 13.8467 231.454 14.46C231.454 15.06 231.554 15.5733 231.754 16C231.968 16.4267 232.234 16.7533 232.554 16.98C232.888 17.2067 233.241 17.32 233.614 17.32Z"
        fill={darkMode.value ? 'white' : 'black'}
      />
    </svg>
  );
};

export default Logo;
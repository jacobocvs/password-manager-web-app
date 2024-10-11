<script setup lang="ts">

</script>

<template>
  <div>

    <main class="content">
      <slot/>

      <ClientOnly
          fallback-tag="div"
          fallback="PWA prompt"
      >
        <div
            v-if="$pwa?.offlineReady || $pwa?.needRefresh"
            class="pwa-alert-container"
            role="alert"
        >
          <i class="material-symbols-rounded">&#xf000;</i>
          <p class="subtitle-1">
            <span v-if="$pwa.offlineReady">
              Offline ready
            </span>
            <span v-else>
              Update
            </span>
          </p>
          <p v-if="$pwa.offlineReady" class="subtitle-2">
            App ready to work offline.
          </p>
          <p v-else class="subtitle-2">
            New content available, click on reload button to update.
          </p>

          <div class="pwa-actions">
            <button
                class="btn btn-outline"
                @click="$pwa.cancelPrompt()"
            >
              Close
            </button>
            <button
                v-if="$pwa.needRefresh"
                class="btn btn-filled"
                @click="$pwa.updateServiceWorker()"
            >
              Reload
            </button>
          </div>
        </div>
        <div
            v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
            class="pwa-alert-container"
            role="alert"
        >
          <i class="material-symbols-rounded">&#xeb71;</i>
          <p class="subtitle-1">
            Install
          </p>
          <p class="subtitle-2">
            Install the Nuxt template app on your device
            for a faster and better experience.
          </p>

          <div class="pwa-actions">
            <button
                class="btn btn-outline"
                @click="$pwa.cancelInstall()"
            >
              Not now
            </button>
            <button
                class="btn btn-filled"
                @click="$pwa.install()"
            >
              Install
            </button>
          </div>
        </div>
      </ClientOnly>
    </main>
  </div>
</template>

busy: ['Playground busy', 'Playground is busy', busyReason, 'The editor will reconnect automatically.'],
      },
      jupyter: {
        unavailable: ['Notebook unavailable', 'Notebook unavailable', 'Your notebook server may still be starting, or it is reconnecting.', 'The notebook will reconnect automatically when it is ready.'],
        busy: ['Playground busy', 'Playground is busy', busyReason, 'The notebook will reconnect automatically.'],
      },
    };
    const {env, reason} = document.documentElement.dataset;
    const text = copy[env] && copy[env][reason];
    if (text) {
      [document.title, document.getElementById('heading').textContent, document.getElementById('reason').textContent, document.getElementById('recovery').textContent] = text;
    }
    // Checks its own URL and reloads once the answer is no longer an edison-nginx error. Every such answer carries the
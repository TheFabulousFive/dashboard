# After Party - Dashboard

An analytics dashboard powered by Django + React

## Requirements

- Python3
- Pipenv
- Node v8.11+
- Yarn

## Setup

Run the following command to install Python dependencies:

```
$> pipenv install -d
```

Then, go to the frontend directory and install JS dependencies:

```
$> cd frontend/
frontend $> yarn install
```

## Development

1. Start the React dev server first:

```
frontend $> yarn start
```

2. Then start Django:

```
$> pipenv run python manage.py runserver
```

You should then be able to view the site at http://localhost:8000

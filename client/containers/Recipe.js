import React, { Component } from 'react';
import { connect } from 'react-redux';

import { recipesFetchData } from '../actions/actions';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.renderRecipe = this.renderRecipe.bind(this);
  }

  componentDidMount() {
    const API_URL = 'http://localhost:3000/api/recipe/?list';

    setTimeout(() => {
      this.props.fetchRecipe(API_URL);
    }, 1000);
  }

  renderEmpty() {
    return (
      <div>
        <h1>No recipes.</h1>
      </div>
    );
  }

  renderRecipe() {
    const { recipes } = this.props;

    if (!Array.isArray(recipes)) {
      return this.renderEmpty();
    }

    const published = recipes.filter(recipe => recipe.state == 'published');

    if (published.length == 0) {
      return this.renderEmpty();
    }

    return published.map(recipe => {
      const Img = recipe.image
        ? () => (
            <img
              style={{ height: '300px' }}
              src={recipe.image.filename}
              alt={recipe.name}
            />
          )
        : () => <em>{recipe.name}</em>;

      function createMarkupForIngredients() {
        if (recipe.ingredientList) {
          return {
            __html: recipe.ingredientList
          };
        } else {
          return;
        }
      }

      function createMarkupForInstructions() {
        if (recipe.cookingInstructions) {
          return {
            __html: recipe.cookingInstructions
          };
        } else {
          return;
        }
      }

      return (
        <div key={recipe._id}>
          <h1>{recipe.name}</h1>

          <Img />

          <h2>Ingredient List</h2>
          <div dangerouslySetInnerHTML={createMarkupForIngredients()} />

          <h2>Cooking Instructions</h2>
          <div dangerouslySetInnerHTML={createMarkupForInstructions()} />
        </div>
      );
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }

    return <div>{this.renderRecipe()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes,
    loading: state.loadRecipes
  };
}

const mapDispatchToProps = dispatch => ({
  fetchRecipe: url => dispatch(recipesFetchData(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);

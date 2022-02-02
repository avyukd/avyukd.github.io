---
layout: post
title: "Beautiful Proofs Part 1 - JL Lemma"
date: 2022-02-01
---
I’m starting the beautiful proofs series to document especially elegant and satisfying proofs I’ve come across studying math and CS. This post walks through an unconvential proof that the Johnson-Lindenstrauss Lemma preserves angles between vectors. I came up with this proof for a HW problem in EECS 498, and I’m not actually sure if it’s completely correct, but I think the idea is pretty cool. 

Suppose we have independently chosen vectors $$ x_1,\dots,x_n \in \mathbb{R}^d $$. We want to reduce these vectors to dimension $$\mathbb{R}^{d^\prime}$$ while retaining important information. Specifically, we want to preserve the distance between arbitrary vectors. Let's select a matrix $$A \in \mathbb{R}^{d^\prime\times d}$$ where each $$A_{ij}$$ is sampled independently from $$N(0, \frac{1}{d'})$$. Then, $$Ax_i$$ is our vector in reduced dimension $$d^\prime$$. Multiplication by $$A$$ is a simple but surprisingly effective dimensionality reduction technique. We want to show that $$\langle Ax_i, Ax_j \rangle \stackrel{\epsilon}{\approx} \langle x_i, x_j \rangle$$ with probability at least $$1-\frac{1}{n}$$. Note that we are just dealing with the standard inner product here. In order to reach this result, we want to first show that $$\mathbb{E}[\langle Ax_i, Ax_j \rangle] = \langle x_i, x_j \rangle$$. Then, there is a simple variation of the Hoeffding bound that we can apply to bound our probability that $$\langle Ax_i, Ax_j \rangle$$ is within $$\epsilon$$ of $$\langle x_i, x_j \rangle$$. The latter step is mostly plug and chug and not really interesting, so I'm just going to show the first part and leave the second as an exercise for the reader (always wanted to say that).

First, $$\mathbb{E}[\langle Ax_i, Ax_j \rangle] = \mathbb{E}[(Ax_j)^TAx_i] = \mathbb{E}[x_j^TA^TAx_i] = x_j^T\mathbb{E}[A^TA]x_i$$. Now, I will show that $$\mathbb{E}[A^TA] = \mathbb{I}_d$$

$$\[
A^TA = \begin{bmatrix} 
    a_{11} & \dots & a_{d^\prime1} \\
    \vdots & \ddots & \\
    a_{1d} &  \dots  & a_{d^\prime d} 
    \end{bmatrix}
    \begin{bmatrix} 
    a_{11} & \dots & a_{1d} \\
    \vdots & \ddots & \\
    a_{d^\prime1} & \dots & a_{d^\prime d} 
    \end{bmatrix}
\]$$

